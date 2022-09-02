import { Theme } from "@mui/material";

export const containerStyle = (theme: Theme) => ({
  display: "flex",
  flexDirection: "column",
  backgroundColor: theme.palette.secondary.deepBlackberry,
  borderRadius: "0.5rem",
  padding: theme.spacing(2),
  gap: theme.spacing(1.5),
});

export const rowStyle = (theme: Theme) => ({
  display: "flex",
  justifyContent: "space-between",
});

export const valuesStyle = (theme: Theme) => ({
  display: "flex",
});

export const iconStyle = (theme: Theme) => ({
  margin: theme.spacing(0, 1),
  color: theme.palette.alert.guava,
  height: "1rem",
  width: "1rem",
});
