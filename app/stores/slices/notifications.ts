import { AlertColor } from "@mui/material";

import { AppState, CustomStateCreator } from "../types";

export enum NotificaitonKind {
  sidebar = "sidebar",
  top = "top",
  snackbar = "snackbar",
}
interface NotificationEntry {
  severity: AlertColor;
  visible?: boolean;
  title?: string;
  description?: string;
  actionLabel?: string;
  showProgress?: boolean;
  onAction?: () => void;
}

interface NotificationsProps {
  [NotificaitonKind.sidebar]: NotificationEntry;
  [NotificaitonKind.top]: NotificationEntry;
  [NotificaitonKind.snackbar]: NotificationEntry;
}

export interface NotificationsSlice {
  notifications: NotificationsProps & {
    showNotification: (
      props: NotificationEntry,
      kind: NotificaitonKind
    ) => void;
    hideNotification: (kind: NotificaitonKind) => void;
    showSidebarNotification: (props: NotificationEntry) => void;
    hideSidebarNotification: () => void;
    showSnackbar: (props: NotificationEntry) => void;
  };
}

export const createNotificationsSlice: CustomStateCreator<NotificationsSlice> =
  (set, get) => ({
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
      [NotificaitonKind.snackbar]: {
        severity: "info",
        title: "",
        description: "",
        actionLabel: "",
        showProgress: true,
      },

      showNotification: (props: NotificationEntry, kind: NotificaitonKind) => {
        set(function showNotification(state: AppState) {
          state.notifications[kind] = {
            ...state.notifications[kind],
            ...props,
            visible: true,
          };
        });
      },

      hideNotification: (kind: NotificaitonKind) => {
        set(function hideSidebarNotification(state: AppState) {
          state.notifications[kind] = {
            ...state.notifications[kind],
            title: "",
            description: "",
            visible: false,
          };
        });
      },

      showSidebarNotification: (props: NotificationEntry) => {
        get().notifications.showNotification(props, NotificaitonKind.sidebar);
      },

      hideSidebarNotification: () => {
        get().notifications.hideNotification(NotificaitonKind.sidebar);
      },

      showSnackbar: (props: NotificationEntry) => {
        get().notifications.showNotification(props, NotificaitonKind.snackbar);
      },
    },
  });

export const getSidebarNotifications = (state: AppState) => {
  return state.notifications.sidebar;
};
