import { Theme } from "@mui/material";

export const containerStyle = (theme: Theme) => ({
  display: "flex",
  flexDirection: "column",
  gap: 2,

  "input::-webkit-outer-spin-button, input::-webkit-inner-spin-button": {
    WebkitAppearance: "none",
    margin: 0,
  },

  "input[type=number]": {
    MozAppearance: "textfield",
  },
});
