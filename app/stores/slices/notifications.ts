import { AlertColor } from "@mui/material";

import { AppState, CustomStateCreator } from "../types";

export enum NotificaitonKind {
  sidebar = "sidebar",
  top = "top",
}
interface NotificationEntry {
  severity: AlertColor;
  visible: boolean;
  title?: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
}

interface NotificationsProps {
  [NotificaitonKind.sidebar]: NotificationEntry;
  [NotificaitonKind.top]: NotificationEntry;
}

export interface NotificationsSlice {
  notifications: NotificationsProps & {
    showSidebarNotification: (props: NotificationEntry) => void;
    hideSidebarNotification: () => void;
  };
}

export const createNotificationsSlice: CustomStateCreator<NotificationsSlice> =
  (set) => ({
    notifications: {
      [NotificaitonKind.sidebar]: {
        severity: "info",
        visible: false,
        title: "",
        description: "",
        actionLabel: "",
      },
      [NotificaitonKind.top]: {
        severity: "info",
        visible: false,
        title: "",
        description: "",
        actionLabel: "",
      },

      showSidebarNotification: (props: NotificationEntry) => {
        set(function showSidebarNotification(state: AppState) {
          state.notifications[NotificaitonKind.sidebar] = {
            ...state.notifications[NotificaitonKind.sidebar],
            ...props,
            visible: true,
          };
        });
      },

      hideSidebarNotification: () => {
        set(function hideSidebarNotification(state: AppState) {
          state.notifications[NotificaitonKind.sidebar] = {
            ...state.notifications[NotificaitonKind.sidebar],
            visible: false,
          };
        });
      },
    },
  });

export const getSidebarNotifications = (state: AppState) => {
  return state.notifications.sidebar;
};
