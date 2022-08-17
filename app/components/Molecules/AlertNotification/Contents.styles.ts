import { Theme } from "@mui/material";

export const containerStyle = (theme: Theme) => ({
  display: "flex",
  flexDirection: "column",
  gap: 0.5,
});

export const titleStyle = (theme: Theme) => ({
  color: theme.palette.secondary.deepestBlackberry,
});

export const descriptionStyle = (theme: Theme) => ({
  color: theme.palette.secondary.deepestBlackberry,
});
