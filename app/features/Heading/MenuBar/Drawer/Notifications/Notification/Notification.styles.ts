import { Theme } from "@mui/material";

export const containerStyle = (theme: Theme) => ({
  display: "flex",
  flexDirection: "column",
  gap: 1.5,
  backgroundColor: theme.palette.secondary.blackberry,
  padding: 2,
  borderRadius: "0.5rem",
});

export const headingStyle = (theme: Theme) => ({
  display: "flex",
  justifyContent: "space-between",
});

export const productStyle = (theme: Theme) => ({
  marginBottom: 2,
});
