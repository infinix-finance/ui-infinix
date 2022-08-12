import { alpha, Theme } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";

export const cssBaselineOverrides = (theme: Theme): Partial<OverridesStyleRules> => ({
  styleOverrides: `
    body {
      background: ${theme.palette.primary.dark};
      font-family: "Sora";
    }
  `,
});