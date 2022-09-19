import { useEffect } from "react";
import { Contract, providers } from "ethers";
import { useWeb3PortalContext, useContractPortal } from "@web3-portal/core";

import {
  ERC20,
  ClearingHouse,
  ERC20__factory,
  ClearingHouse__factory,
} from "./types";
import { useStore } from "@/stores/root";

export const useERC20 = (chainId: number, address: string) =>
  useContractPortal(
    chainId,
    new Contract(address, ERC20__factory.abi) as ERC20
  );

export const useClearingHouse = (chainId: number) =>
  useContractPortal(
    chainId,
    new Contract(
      process.env.CLEARING_HOUSE!,
      ClearingHouse__factory.abi
    ) as ClearingHouse
  );

export const MetamaskUpdater = () => {
  const { setWalletProvider } = useWeb3PortalContext();
  const { active, account, chainId } = useStore((store) => store.connection);

  useEffect(() => {
    if (!active || !account || !chainId) return;

    setWalletProvider({
      provider: new providers.Web3Provider(window.ethereum as any),
      connectedUserAddress: account,
      chainId,
    });
  }, [active, account, chainId, setWalletProvider]);

  return null;
};
