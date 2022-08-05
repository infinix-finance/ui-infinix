import { Theme } from "@mui/material";

export const containerStyle = (theme: Theme) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.secondary.deeperBlackberry,
  flex: 1,
});

export const contentStyle = (theme: Theme) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(2),
});

export const iconStyle = (theme: Theme) => ({
  color: theme.palette.primary.plum,
  height: "4rem",
  width: "6rem",
});

export const messageStyle = (theme: Theme) => ({
  color: theme.palette.secondary.graishLavender,
  padding: theme.spacing(0, 4),
});
