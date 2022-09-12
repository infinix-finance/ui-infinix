import { Theme } from "@mui/material";

export const containerStyle = (theme: Theme) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const infoIconStyle = (theme: Theme) => ({
  color: theme.palette.primary.plum,

  "&:hover": {
    color: theme.palette.secondary.graishLavender,
  },
});
