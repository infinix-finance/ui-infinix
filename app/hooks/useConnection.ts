import { useEffect } from "react";

import { useStore } from "@/stores/root";

export default function useConnection() {
  const { restore, changeAccounts, changeNetwork } = useStore(
    (store) => store.connection
  );

  useEffect(() => {
    const restoreSession = async () => {
      const accountsChanged = (accounts: string[]) => {
        changeAccounts(accounts);
      };

      const chainChanged = (chainId: any) => {
        changeNetwork(chainId);
      };

      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });

      accounts.length && restore(window.ethereum.chainId, accounts);

      window.ethereum.on("accountsChanged", accountsChanged);
      window.ethereum.on("chainChanged", chainChanged);

      return () => {
        window.ethereum.removeListener("accountsChanged", accountsChanged);
        window.ethereum.removeListener("chainChanged", chainChanged);
      };
    };

    restoreSession();
  }, []);
}
