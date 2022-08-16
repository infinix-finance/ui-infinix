import { useCallback, useEffect } from "react";

import { InjectedConnector } from "@web3-react/injected-connector";
import { useWeb3React } from "@web3-react/core";
import { useStore } from "@/stores/root";

const injectedConnector = new InjectedConnector({});

const errorHandler = (error: any) => console.error(error);

const switchNetwork = (library: any) => () => {
  library.provider
    .request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: "0xa86a" }],
    })
    .catch((error: any) => {
      if (error.code !== 4902) throw error;

      library.provider
        .request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId: "0xa86a",
              chainName: "Avalanche C-Chain",
              nativeCurrency: {
                name: "Avalanche",
                symbol: "AVAX",
                decimals: 18,
              },
              rpcUrls: ["https://api.avax.network/ext/bc/C/rpc"],
              blockExplorerUrls: ["https://snowtrace.io/"],
            },
          ],
        })
        .catch(errorHandler);
    })
    .catch(errorHandler);
};

export const useMetamaskConnection = () => {
  const {
    active,
    chainId,
    account,
    error,
    activate: web3Activate,
    deactivate,
    library,
  } = useWeb3React();
  const { updateDetails } = useStore((store) => store.connection);

  const activate = useCallback(() => {
    web3Activate(injectedConnector);
  }, [web3Activate]);

  useEffect(() => {
    if (!error) return;

    const message = `${error.message} Probably you have to manually open your Metamask wallet and unlock it.`;
    alert(message);
  }, [error]);

  useEffect(() => {
    injectedConnector.isAuthorized().then((authorized) => {
      authorized && web3Activate(injectedConnector);
    });
  }, []);

  useEffect(() => {
    updateDetails({
      active,
      chainId,
      account,
      error,
      activate,
      deactivate,
      switchNetwork: switchNetwork(library),
    });
  }, [active, chainId, account, error, activate, deactivate]);
};
