import { Theme } from "@mui/material";

export const containerStyle = (theme: Theme) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 999999,
  backgroundColor: theme.palette.secondary.deeperBlackberry,
  flex: 1,
});

export const contentStyle = (theme: Theme) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(1),
});

export const iconStyle = (theme: Theme) => ({
  color: theme.palette.primary.plum,
  height: "4rem",
  width: "6rem",
  marginBottom: theme.spacing(2),
});

export const messageStyle = (theme: Theme) => ({
  color: theme.palette.secondary.graishLavender,
  padding: theme.spacing(0, 4),
});
