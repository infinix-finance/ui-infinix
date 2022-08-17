import { alpha, Theme } from "@mui/material";
import { Notifications } from "./types";

export const iconStyle = {
  width: "1.25rem",
  height: "1.25rem",
};

export const buttonStyle = {
  width: "3rem",
  height: "3rem",
};

export const notificationButtonStyle =
  (notification: Notifications) => (theme: Theme) => {
    return {
      "&:after": {
        content: '""',
        width: "10px",
        height: "10px",
        top: "12px",
        right: "10px",
        borderRadius: "5px",
        position: "absolute",
        backgroundColor:
          notification === Notifications.unread
            ? theme.palette.alert.guava
            : "transparent",
      },

      "& svg": {
        color:
          notification === Notifications.inactive
            ? theme.palette.secondary.graishLavender
            : undefined,
      },
    };
  };

export const walletButtonStyle = (connected: boolean) => (theme: Theme) => ({
  display: "flex",
  gap: 1.5,
  width: "unset",
  backgroundColor: connected
    ? alpha(theme.palette.primary.plum, theme.custom.opacity._10percent)
    : undefined,
});
