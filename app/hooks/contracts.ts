import create from "zustand";
import { useEffect } from "react";
import { Contract, BigNumber, providers, utils } from "ethers";

import { useStore } from "@/stores/root";
import contractConfig from "@/defi/contracts";

interface ContractList {
  signer?: providers.JsonRpcSigner;
  clearingHouse?: Contract;
}

interface ContractStore extends ContractList {
  setContracts: (contracts: ContractList) => void;
}

// TODO: We should decide whether we want to use this or not
// we are using this to speed up transactions for testing
const gasAmount = (chainId: number | undefined) => {
  switch (chainId) {
    case 43113:
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
      clearingHouse: new Contract(
        contractConfig.clearingHouse.addr,
        contractConfig.clearingHouse.abi,
        signer
      ),
    });
  }, [active, setContracts]);
};

export const useClearingHouse = () => {
  const { active, account, chainId } = useStore((state) => state.connection);
  const { signer, clearingHouse } = useContractStore((state) => state);
  const gasLimit = gasAmount(chainId);

  const openPosition = async (
    amm: string,
    quoteAsset: string,
    side: number,
    quoteAssetAmount: string,
    leverage: string,
    baseAssetAmountLimit: string
  ) => {
    if (!active || !clearingHouse) return;

    try {
      const amountToSpend = utils.parseEther(quoteAssetAmount);
      const erc20 = new Contract(quoteAsset, contractConfig.erc20.abi, signer);

      const allowance: BigNumber = await erc20.allowance(
        account,
        contractConfig.clearingHouse.addr
      );

      // approve spending if necessary first
      if (allowance.lt(amountToSpend)) {
        // to increase allowance we first have to reduce it to 0
        if (allowance.gt(0)) {
          const reduction = await erc20.approve(
            contractConfig.clearingHouse.addr,
            0,
            gasLimit
          );
          await reduction.wait();
        }
        const approval = await erc20.approve(
          contractConfig.clearingHouse.addr,
          amountToSpend,
          gasLimit
        );
        await approval.wait();
      }

      const result = await clearingHouse.openPosition(
        amm,
        side,
        [amountToSpend],
        [utils.parseEther(leverage)],
        [utils.parseEther(baseAssetAmountLimit)],
        gasLimit
      );
      await result.wait();
    } catch (error) {
      console.error(error);
    }
  };

  const closePosition = async (amm: string, quoteAssetAmountLimit: string) => {
    if (!active || !clearingHouse) return;

    try {
      const result = await clearingHouse.closePosition(
        amm,
        [utils.parseEther(quoteAssetAmountLimit)],
        gasLimit
      );
      await result.wait();
    } catch (error) {
      console.error(error);
    }
  };

  return {
    openPosition,
    closePosition,
  };
};
