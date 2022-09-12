import { Theme } from "@mui/material";

export const containerStyle = (theme: Theme) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const slippageLabelStyle = (isValid: boolean) => (theme: Theme) => ({
  color: isValid
    ? theme.palette.primary.ice
    : theme.palette.secondary.graishLavender,
});

export const actionStyle = (theme: Theme) => ({
  display: "flex",
  alignItems: "center",
  gap: 3,
});

export const iconStyle = {
  width: "1rem",
  height: "1rem",
};
