import create from "zustand";
import { useEffect } from "react";
import { Contract, providers, utils } from "ethers";

import { useStore } from "@/stores/root";
import contractConfig from "@/defi/contracts";

interface ContractList {
  clearingHouse?: Contract;
}

interface ContractStore extends ContractList {
  setContracts: (contracts: ContractList) => void;
}

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
      clearingHouse: new Contract(
        contractConfig.clearingHouse.addr,
        contractConfig.clearingHouse.abi,
        signer
      ),
    });
  }, [active, setContracts]);
};

export const useClearingHouse = () => {
  const { active } = useStore((state) => state.connection);
  const { clearingHouse } = useContractStore((state) => state);

  const openPosition = async (
    amm: string,
    side: number,
    quoteAssetAmount: string,
    leverage: string,
    baseAssetAmountLimit: string
  ) => {
    if (!active || !clearingHouse) return;

    try {
      const result = await clearingHouse.openPosition(
        amm,
        side,
        [utils.parseEther(quoteAssetAmount)],
        [utils.parseEther(leverage)],
        [utils.parseEther(baseAssetAmountLimit)]
      );
      await result.wait();
    } catch (error) {
      console.error(error);
    }
  };

  const closePosition = async (amm: string, quoteAssetAmountLimit: string) => {
    if (!active || !clearingHouse) return;

    try {
      const result = await clearingHouse.closePosition(amm, [
        utils.parseEther(quoteAssetAmountLimit),
      ]);
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
