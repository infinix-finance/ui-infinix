import { alpha, Theme } from "@mui/material";

export const containerStyle = (theme: Theme) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "200px",
});

export const positivePnlStyle = {
  color: "alert.lemon",
};

export const negativePnlStyle = {
  color: "alert.guava",
};

export const neutralIndicatorStyle = (theme: Theme) => ({
  display: "inline-block",
  padding: 1.25,
  borderRadius: "0.5rem",
  backgroundColor: alpha(
    theme.palette.primary.ice,
    theme.custom.opacity._10percent
  ),
});

export const indicatorStyle = (isLiquidated: boolean) => (theme: Theme) => ({
  display: "inline-block",
  padding: 1.25,
  borderRadius: "0.5rem",
  color: isLiquidated ? theme.palette.alert.guava : theme.palette.primary.ice,
  backgroundColor: alpha(
    isLiquidated ? theme.palette.alert.guava : theme.palette.primary.ice,
    theme.custom.opacity._10percent
  ),
});
