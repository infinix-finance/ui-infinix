import { Theme } from "@mui/material";

export const containerStyle = (theme: Theme) => ({
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(2),
  gap: theme.spacing(1.5),
});

export const rowStyle = (isValid: boolean) => (theme: Theme) => ({
  display: "flex",
  justifyContent: "space-between",
  color: isValid
    ? theme.palette.primary.ice
    : theme.palette.secondary.graishLavender,
});

export const valuesStyle = (_theme: Theme) => ({
  display: "flex",
});

export const iconStyle = (theme: Theme) => ({
  margin: theme.spacing(0, 1),
  color: theme.palette.alert.guava,
  height: "1rem",
  width: "1rem",
});
