import BigNumber from "bignumber.js";

import { isSupportedNetwork, NetworkId, WalletId } from "@/defi";
import { AppState, CustomStateCreator } from "../types";

interface ConnectionProps {
  account?: string | null;
  chainId?: NetworkId;
  walletId?: WalletId;
  error?: Error;
  balance: BigNumber;
  active: boolean;
  activate: () => void;
  deactivate: () => void;
  switchNetwork: () => void;
}

export interface ConnectionSlice {
  connection: ConnectionProps & {
    updateDetails: (details: Omit<ConnectionProps, "balance">) => void;
  };
}

export const createConnectionSlice: CustomStateCreator<ConnectionSlice> = (
  set,
  get
) => ({
  connection: {
    active: false,
    balance: new BigNumber(0),
    activate: () => {},
    deactivate: () => {},
    switchNetwork: () => {},

    updateDetails: (details: Omit<ConnectionProps, "balance">) => {
      details.chainId && !isSupportedNetwork(details.chainId)
        ? get().notifications.showSidebarNotification({
            severity: "error",
            visible: true,
            title: "You need to connect to Avalanche.",
            actionLabel: "Switch",
            onAction: details.switchNetwork,
          })
        : get().notifications.hideSidebarNotification();

      set(function updateDetails(state: AppState) {
        state.connection = { ...state.connection, ...details };
        state.connection.walletId = WalletId.metamask;
      });
    },
  },
});

export const getBalance = (state: AppState): BigNumber =>
  state.connection.balance as BigNumber;
