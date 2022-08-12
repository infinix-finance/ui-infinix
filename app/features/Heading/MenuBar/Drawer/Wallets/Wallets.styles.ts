import { Theme } from "@mui/material";

export const containerStyle = (theme: Theme) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100%",
});

export const contentStyle = (connected: boolean) => (theme: Theme) => ({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: connected ? theme.palette.secondary.blackberry : undefined,
  padding: theme.spacing(3, 2),
});

export const disconnectButtonStyle = (theme: Theme) => ({
  marginBottom: "5rem",
  margin: theme.spacing(0, 2, 10),
});
