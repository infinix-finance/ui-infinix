import { alpha, Theme } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";

export const backdropOverrides = (
  theme: Theme
): Partial<OverridesStyleRules> => ({
  styleOverrides: {
    root: {
      background: alpha(
        theme.palette.secondary.deepestBlackberry,
        theme.custom.opacity._60percent
      ),
    },
  },
});
