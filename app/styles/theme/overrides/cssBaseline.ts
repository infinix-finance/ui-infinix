import { alpha, Theme } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";

export const cssBaselineOverrides = (
  theme: Theme
): Partial<OverridesStyleRules> => ({
  styleOverrides: {
    body: {
      background: theme.palette.secondary.deepestBlackberry,
      fontFamily: "Sora",
      overflow: "hidden",
    },

    "&::-webkit-scrollbar": {
      width: "0.5rem",
    },

    "&::-webkit-scrollbar-track": {
      background: alpha(
        theme.palette.primary.plum,
        theme.custom.opacity._10percent
      ),
    },

    "&::-webkit-scrollbar-thumb": {
      background: theme.palette.primary.plum,
      borderWidth: "0",
      borderRadius: "0.5rem",
      backgroundClip: "content-box",
    },
  },
});
