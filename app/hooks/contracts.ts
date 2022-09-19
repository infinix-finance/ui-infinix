import create from "zustand";
import { useEffect, useState, useCallback } from "react";
import { BigNumber, providers, utils } from "ethers";

import { useStore } from "@/stores/root";
import { NetworkId } from "@/defi/types";
import { ClearingHouse } from "@/defi/contracts/types";
import { getERC20Contract, getClearingHouseContract } from "@/defi/contracts";

interface ContractList {
  signer?: providers.JsonRpcSigner;
  clearingHouse?: ClearingHouse;
}

interface ContractStore extends ContractList {
  setContracts: (contracts: ContractList) => void;
}

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
  const { active } = useStore((state) => state.connection);
  const { setContracts } = useContractStore((state) => state);

  useEffect(() => {
    if (!active) return;

    const provider = new providers.Web3Provider(window.ethereum as any);
    const signer = provider.getSigner();

    setContracts({
      signer,
      clearingHouse: getClearingHouseContract(signer),
    });
  }, [active, setContracts]);
};

export const useERC20 = () => {
  const { active, account } = useStore((state) => state.connection);
  const { setBalance } = useStore((state) => state.tradingSidebar);
  const { quoteAsset } = useStore((state) => state.amm);
  const { signer } = useContractStore((state) => state);

  const getTokenBalance = useCallback(async () => {
    if (!active || !signer || !account) return;

    try {
      // for testing, "0x9983F755Bbd60d1886CbfE103c98C272AA0F03d6" can be used instead
      const erc20 = getERC20Contract(quoteAsset, signer);
      const result = await erc20.balanceOf(account);
      result && setBalance(utils.formatUnits(result));
    } catch (error) {
      console.error(error);
    }
  }, [active, account, quoteAsset, signer, setBalance]);

  useEffect(() => {
    if (!active) return;

    // TODO: Put back after testing
    // getTokenBalance();
    setBalance("10000");
  }, [active, getTokenBalance, setBalance]);

  return {
    getTokenBalance,
  };
};

// TODO: For the future we need to make sure loading is preserved after page refresh
// e.g. store transaction hashes in local storage and ask for their receipts to determine initial loading status
export const useClearingHouse = () => {
  const [loading, setLoading] = useState(false);
  const { active, account, chainId } = useStore((state) => state.connection);
  const { signer, clearingHouse } = useContractStore((state) => state);
  const gasLimit = gasAmount(chainId);

  const openPosition = async (
    amm: string,
    quoteAsset: string,
    side: number,
    quoteAssetAmount: string,
    leverage: number,
    baseAssetAmountLimit: string
  ) => {
    if (!active || !account || !clearingHouse || !signer) return;

    setLoading(true);
    try {
      const amountToSpend = utils.parseUnits(quoteAssetAmount);
      const erc20 = getERC20Contract(quoteAsset, signer);

      const allowance: BigNumber = await erc20.allowance(
        account,
        clearingHouse.address
      );

      // approve spending if necessary first
      if (allowance.lt(amountToSpend)) {
        // to increase allowance we first have to reduce it to 0
        if (allowance.gt(0)) {
          const reduction = await erc20.approve(
            clearingHouse.address,
            0,
            gasLimit
          );
          await reduction.wait();
        }
        const approval = await erc20.approve(
          clearingHouse.address,
          amountToSpend,
          gasLimit
        );
        await approval.wait();
      }

      const result = await clearingHouse.openPosition(
        amm,
        side,
        { d: amountToSpend },
        { d: utils.parseUnits(leverage.toString()) },
        { d: utils.parseUnits(baseAssetAmountLimit) },
        gasLimit
      );
      await result.wait();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const closePosition = async (amm: string, quoteAssetAmountLimit: string) => {
    if (!active || !clearingHouse) return;

    setLoading(true);
    try {
      const result = await clearingHouse.closePosition(
        amm,
        { d: utils.parseUnits(quoteAssetAmountLimit) },
        gasLimit
      );
      await result.wait();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    openPosition,
    closePosition,
    loading,
  };
};
