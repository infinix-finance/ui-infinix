import { AlertColor } from "@mui/material";

import { SWITCH_CONNECTION_MSG, NO_CONNECTION_MSG } from "@/constants/messages";
import { isSupportedNetwork, NetworkId, WalletId } from "@/defi";
import { AppState, CustomStateCreator } from "../types";

interface ConnectionProps {
  account?: string | null;
  chainId?: NetworkId;
  walletId?: WalletId;
  error?: Error;
  active: boolean;
  activate: () => void;
  deactivate: () => void;
  switchNetwork: () => void;
}

export interface ConnectionSlice {
  connection: ConnectionProps & {
    updateDetails: (details: ConnectionProps) => void;
  };
}

export const createConnectionSlice: CustomStateCreator<ConnectionSlice> = (
  set,
  get
) => ({
  connection: {
    active: false,
    activate: () => {},
    deactivate: () => {},
    switchNetwork: () => {},

    updateDetails: (details: ConnectionProps) => {
      const showNotification = Boolean(
        !details.active ||
          (details.chainId && !isSupportedNetwork(details.chainId))
      );

      updateDetailsHelper(
        showNotification,
        get,
        details.active ? details.switchNetwork : undefined
      );

      set(function updateDetails(state: AppState) {
        state.connection = { ...state.connection, ...details };
        state.connection.walletId = WalletId.metamask;
      });
    },
  },
});

const updateDetailsHelper = (
  show: boolean,
  get: () => AppState,
  onAction?: () => void
) => {
  const { notifications } = get();

  if (show) {
    const payload = {
      severity: "error" as AlertColor,
      visible: true,
      title: onAction ? SWITCH_CONNECTION_MSG : NO_CONNECTION_MSG,
      actionLabel: "Switch",
      onAction,
    };

    notifications.showSidebarNotification(payload);
    notifications.showCreatePositionNotification(payload);

    return;
  }

  notifications.hideSidebarNotification();
  notifications.hideCreatePositionNotification();
};
