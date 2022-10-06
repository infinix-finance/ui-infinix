import { BigNumber, providers, utils } from "ethers";
import { useCallback, useEffect, useState } from "react";
import create from "zustand";

import { getClearingHouseContract, getTokenContract } from "@/defi/contracts";
import { BasicTokenWithMint, ClearingHouse } from "@/defi/contracts/types";
import { NetworkId } from "@/defi/types";
import { useStore } from "@/stores/root";

import { useSnackbar } from "@/components/Organisms/Snackbar/useSnackbar";
import { getSelectedNetwork } from "@/stores/slices/connection";

interface ContractList {
  basicTokenWithMint?: BasicTokenWithMint;
  clearingHouse?: ClearingHouse;
}

interface ContractStore extends ContractList {
  setContracts: (contracts: ContractList) => void;
}

const toDecimalStruct = (d: BigNumber) => ({
  d,
});

const handleTxError = (
  err: string,
  title: string,
  description: string,
  show: Function
) => {
  if (!err.includes("user rejected transaction")) {
    show({
      title,
      description,
    });
    console.error(err);
  }
};

// TODO: We should decide whether we want to use this or not
// we are using this to speed up transactions for testing
const gasAmount = (chainId: number | undefined) => {
  switch (chainId) {
    case NetworkId.avalancheTestnet:
      return { gasLimit: 1000000 };
    default:
      return {};
  }
};

const useContractStore = create<ContractStore>((set) => ({
  setContracts: (contracts: ContractList) =>
    set((state) => ({ ...state, ...contracts })),
}));

export const useContractConnection = () => {
  const { active, chainId } = useStore((state) => state.connection);
  const { setContracts } = useContractStore((state) => state);

  useEffect(() => {
    if (!active) return;

    const provider = new providers.Web3Provider(window.ethereum as any);
    const signer = provider.getSigner();

    setContracts({
      basicTokenWithMint: getTokenContract(signer),
      clearingHouse: getClearingHouseContract(signer),
    });
  }, [active, chainId, setContracts]);
};

export const useToken = () => {
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const { active, account, chainId } = useStore((state) => state.connection);
  const { setBalance } = useStore((state) => state.tradingSidebar);
  const { basicTokenWithMint } = useContractStore((state) => state);
  const gasLimit = gasAmount(chainId);

  const getTokenBalance = useCallback(async () => {
    if (!active || !account || !basicTokenWithMint) return;

    try {
      const result = await basicTokenWithMint.balanceOf(account);
      result && setBalance(utils.formatUnits(result));
    } catch (error) {
      console.error(error);
    }
  }, [account, active, basicTokenWithMint, setBalance]);

  const mintToken = async (amount: string) => {
    if (!active || !basicTokenWithMint) return;

    setLoading(true);
    try {
      const result = await basicTokenWithMint.mint(
        utils.parseUnits(amount),
        gasLimit
      );
      await result.wait();
    } catch (error) {
      handleTxError(
        JSON.stringify(error),
        "Failed to mint token",
        "See the console for more details",
        enqueueSnackbar
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    getTokenBalance,
    mintToken,
    loading,
  };
};

// TODO: For the future we need to make sure loading is preserved after page refresh
// e.g. store transaction hashes in local storage and ask for their receipts to determine initial loading status
export const useClearingHouse = () => {
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const { active, account, chainId } = useStore((state) => state.connection);
  const { basicTokenWithMint, clearingHouse } = useContractStore(
    (state) => state
  );
  const { addCloseEvent, removeCloseEvent } = useStore(
    (state) => state.userPositions
  );
  const gasLimit = gasAmount(chainId);
  const network = useStore(getSelectedNetwork);

  const openPosition = async (
    amm: string,
    side: number,
    quoteAssetAmount: string,
    leverage: number,
    baseAssetAmountLimit: string
  ) => {
    if (!active || !account || !clearingHouse || !basicTokenWithMint) return;

    setLoading(true);
    try {
      const amountToSpend = utils.parseUnits(quoteAssetAmount);

      const allowance: BigNumber = await basicTokenWithMint.allowance(
        account,
        clearingHouse.address
      );

      // approve spending if necessary first
      if (allowance.lt(amountToSpend)) {
        const approval = await basicTokenWithMint.approve(
          clearingHouse.address,
          amountToSpend,
          gasLimit
        );
        await approval.wait();
      }

      const result = await clearingHouse.openPosition(
        amm,
        side,
        toDecimalStruct(amountToSpend),
        toDecimalStruct(utils.parseUnits(leverage.toString())),
        toDecimalStruct(utils.parseUnits(baseAssetAmountLimit)),
        gasLimit
      );
      const confirmed = await result.wait();
      enqueueSnackbar({
        title: "Success",
        description: "Position creation was successfull",
        severity: "success",
        url: network.etherscanLink
          ? `${network.etherscanLink}block/${confirmed.blockHash}`
          : undefined,
      });
    } catch (error) {
      handleTxError(
        JSON.stringify(error),
        "Failed to open position",
        "See the console for more details",
        enqueueSnackbar
      );
    } finally {
      setLoading(false);
    }
  };

  const closePosition = async (amm: string, quoteAssetAmountLimit: string) => {
    if (!active || !clearingHouse) return;

    setLoading(true);
    addCloseEvent(amm);
    try {
      const result = await clearingHouse.closePosition(
        amm,
        toDecimalStruct(utils.parseUnits(quoteAssetAmountLimit).abs()),
        gasLimit
      );
      const confirmed = await result.wait();
      enqueueSnackbar({
        title: "Success",
        description: "You have successfully closed the position",
        severity: "success",
        url: network.etherscanLink
          ? `${network.etherscanLink}block/${confirmed.blockHash}`
          : undefined,
      });
    } catch (error) {
      handleTxError(
        JSON.stringify(error),
        "Failed to close position",
        "See the console for more details",
        enqueueSnackbar
      );
    } finally {
      setLoading(false);
      removeCloseEvent(amm);
    }
  };

  return {
    openPosition,
    closePosition,
    loading,
  };
};
