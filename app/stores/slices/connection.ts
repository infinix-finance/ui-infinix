import { NetworkId, WalletId } from "@/defi";
import { AppState, CustomStateCreator } from "../types";

interface Wallet {
  walletId: WalletId | null;
  networkId: NetworkId | null;
}

interface ConnectionProps {
  accounts: string[];
  wallet: Wallet;
  connected: boolean;
}

export interface ConnectionSlice {
  connection: ConnectionProps & {
    connect: () => void;
    disconnect: () => void;
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
      walletId: null,
      networkId: null,
    },
    connected: false,

    connect: async () => {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      set(function connect(state: AppState) {
        state.connection.connected = true;
        state.connection.accounts = accounts;
      });
    },

    disconnect: async () => {
      set(function disconnect(state: AppState) {
        state.connection.connected = false;
        state.connection.accounts = [];
        state.connection.wallet = {
          walletId: null,
          networkId: null,
        };
      });
    },

    restore: (networkId: NetworkId, accounts: string[]) => {
      set(function restore(state: AppState) {
        state.connection.connected = true;
        state.connection.accounts = accounts;
        state.connection.wallet.networkId = networkId;
        state.connection.wallet.walletId = WalletId.metamask;
      });
    },

    changeAccounts: (accounts: string[]) => {
      set(function changeAccounts(state: AppState) {
        state.connection.accounts = accounts;
      });
    },

    changeNetwork: (networkId: NetworkId) => {
      set(function changeNetwork(state: AppState) {
        state.connection.wallet.networkId = networkId;
        state.connection.wallet.walletId = WalletId.metamask;
      });
    },
  },
});

export const isSupportedNetwork = (state: AppState) => {
  return state.connection.wallet.networkId === NetworkId.arbitrum;
};

export const getAccount = (state: AppState) => {
  return state.connection.accounts?.[0] || "";
};
