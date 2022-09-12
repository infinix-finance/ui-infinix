import create from "zustand";
import { useEffect } from "react";
import { providers, Contract } from "ethers";

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

// TODO: only for testing, replace in the future
export const useClearingHouse = () => {
  const { active } = useStore((state) => state.connection);
  const { clearingHouse } = useContractStore((state) => state);

  const payFunding = async () => {
    if (!active || !clearingHouse) return;

    try {
      const result = await clearingHouse.payFunding(
        "0xE5639cBB02eC3bd65c77E128B0c7350AeEFb2bd1"
      );
      await result.wait();
    } catch (error) {
      console.error(error);
    }
  };

  return {
    payFunding,
  };
};
