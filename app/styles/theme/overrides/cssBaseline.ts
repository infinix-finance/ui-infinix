import { alpha, Theme } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";

export const cssBaselineOverrides = (theme: Theme): Partial<OverridesStyleRules> => ({
  styleOverrides: `
    @font-face {
      font-family: "TentangNanti";
      font-style: normal;
      font-display: swap;
      font-weight: 400;
      src: local('TentangNanti'), local('TentangNanti'), url("/static/TentangNanti.woff") format('woff');
    };
    body {
      background: ${theme.palette.primary.dark};
    }
  `,
});