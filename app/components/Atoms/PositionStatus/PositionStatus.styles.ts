import { alpha, Theme } from "@mui/material";

export const containerStyle =
  (inlineBlock: boolean, liquidated: boolean) => (theme: Theme) => ({
    display: inlineBlock ? "inline-block" : "flex",
    alignSelf: "start",
    padding: 1.25,
    borderRadius: "0.5rem",
    color: liquidated ? theme.palette.alert.guava : theme.palette.primary.ice,
    backgroundColor: alpha(
      liquidated ? theme.palette.alert.guava : theme.palette.primary.ice,
      theme.custom.opacity._10percent
    ),
  });
