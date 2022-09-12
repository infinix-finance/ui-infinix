import { Theme } from "@mui/material";

export const containerStyle = (theme: Theme) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "1.5rem",
  margin: theme.spacing(2),
});
