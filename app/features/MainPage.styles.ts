import { Theme } from "@mui/material";

export const containerStyle = (theme: Theme) => ({
  display: "flex",
  flexDirection: "column",
  height: "100vh",
});

export const notificationStyle = (theme: Theme) => ({
  [theme.breakpoints.up("lg")]: {
    px: theme.spacing(4),
  },
  [theme.breakpoints.up("xl")]: {
    px: theme.spacing(6),
  },
});
