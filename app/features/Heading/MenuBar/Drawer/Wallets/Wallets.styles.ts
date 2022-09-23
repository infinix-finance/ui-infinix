import { Theme } from "@mui/material";

export const containerStyle = (_theme: Theme) => ({
  height: "100%",
  display: "block",
});

export const titleStyle = (theme: Theme) => ({
  margin: theme.spacing(0, 2, 5),
  color: theme.palette.secondary.graishLavender,
});

export const contentStyle = (connected: boolean) => (theme: Theme) => ({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: connected ? theme.palette.secondary.blackberry : undefined,
  padding: theme.spacing(3, 2),
});

export const disconnectButtonStyle = (theme: Theme) => ({
  position: "absolute",
  bottom: theme.spacing(10),
  margin: theme.spacing(0, 2),
  width: `calc(100% - ${theme.spacing(4)})`,
});
