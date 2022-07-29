import { OverridesStyleRules } from "@mui/material/styles/overrides";

export const dialogOverrides = (): Partial<OverridesStyleRules> => ({
  styleOverrides: {
    paper: {
      backgroundColor: "transparent",
      backgroundImage: "none",
      boxShadow: "none",
    },
  },
});