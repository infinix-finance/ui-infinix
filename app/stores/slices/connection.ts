import { getWallet, NetworkId, WalletId } from "@/defi";
import { mockRequest } from "@/utils/mock";
import { AppState, CustomStateCreator } from "../types";

interface Wallet {
  name: string;
  network: NetworkId | null;
}

interface ConnectionProps {
  accounts: string[];
  wallet: Wallet;
  connected: boolean;
}

export interface ConnectionSlice {
  connection: ConnectionProps & {
    connect: () => void;
    restore: (networkId: NetworkId, accounts: string[]) => void;
    changeAccounts: (accounts: string[]) => void;
    changeNetwork: (networkId: NetworkId) => void;
  };
}

export const createConnectionSlice: CustomStateCreator<ConnectionSlice> = (
  set
) => ({
  connection: {
    accounts: [],
    wallet: {
      name: "",
      network: null,
    },
    connected: false,

    connect: async () => {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log(accounts);

      set(function connect(state: AppState) {
        state.connection.connected = true;
        state.connection.accounts = accounts;
      });
    },

    restore: (networkId: NetworkId, accounts: string[]) => {
      set(function connect(state: AppState) {
        state.connection.connected = true;
        state.connection.accounts = accounts;
        state.connection.wallet.network = networkId;
        state.connection.wallet.name = getWallet(WalletId.metamask).name;
      });
    },

    changeAccounts: (accounts: string[]) => {
      set(function connect(state: AppState) {
        state.connection.accounts = accounts;
      });
    },

    changeNetwork: (networkId: NetworkId) => {
      set(function connect(state: AppState) {
        state.connection.wallet.network = networkId;
      });
    },
  },
});

export const isSupportedNetwork = (state: AppState) => {
  return state.connection.wallet.network === NetworkId.arbitrum;
};
