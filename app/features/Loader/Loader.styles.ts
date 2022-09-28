import { Theme } from "@mui/material";

export const containerStyle = (_theme: Theme) => ({
  display: "flex",
  flexDirection: "column",
  height: "100vh",
});

export const loaderContainerStyle = (_theme: Theme) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: 4,
  width: "100vw",
  height: "100vh",
});
