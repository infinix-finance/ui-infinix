import { NetworkId } from "@/defi";
import { mockRequest } from "@/utils/mock";
import { AppState, CustomStateCreator } from "../types";

interface Account {
  address: string;
}

interface Wallet {
  name: string;
  network: NetworkId | null;
}

interface ConnectionProps {
  account: Account;
  wallet: Wallet;
  connected: boolean;
}

export interface ConnectionSlice {
  connection: ConnectionProps & {
    connect: () => void;
    disconnect: () => void;
  };
}

export const createConnectionSlice: CustomStateCreator<ConnectionSlice> = (
  set
) => ({
  connection: {
    account: {
      address: "",
    },
    wallet: {
      name: "",
      network: null,
    },
    connected: false,

    connect: async () => {
      await mockRequest(null, 1000);

      set(function connect(state: AppState) {
        state.connection.connected = true;
      });
    },

    disconnect: async () => {
      await mockRequest(null, 1000);

      set(function connect(state: AppState) {
        state.connection.connected = false;
      });
    },
  },
});

export const isSupportedNetwork = (state: AppState) => {
  return state.connection.wallet.network === NetworkId.arbitrum;
};
