import { AlertColor } from "@mui/material";

import { NetworkId } from "@/defi";
import { AppState, CustomStateCreator } from "../types";

interface NotificationsProps {
  severity: AlertColor;
  visible: boolean;
  title?: string;
  description?: string;
  actionLabel?: string;
}

export interface NotificationsSlice {
  notification: NotificationsProps & {
    showSidebarNotification: (props: NotificationsProps) => void;
  };
}

export const createNotificationsSlice: CustomStateCreator<NotificationsSlice> =
  (set) => ({
    notification: {
      severity: "info",
      visible: false,
      title: "",
      description: "",
      actionLabel: "",

      showSidebarNotification: (props: NotificationsProps) => {
        set(function showSidebarNotification(state: AppState) {
          state.notification = {
            ...state.notification,
            ...props,
          };
        });
      },
    },
  });

export const isSupportedNetwork = (state: AppState) => {
  return state.connection.wallet.network === NetworkId.arbitrum;
};
