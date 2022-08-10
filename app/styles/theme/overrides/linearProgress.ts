import { Theme } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";

export const linearProgressOverrides = (
  theme: Theme
): Partial<OverridesStyleRules> => ({
  styleOverrides: {
    root: {
      backgroundColor: "transparent",
      "& .MuiLinearProgress-bar": {
        "&.MuiLinearProgress-barColorInfo": {
          backgroundColor: theme.palette.info.dark,
        },
        "&.MuiLinearProgress-barColorSuccess": {
          backgroundColor: theme.palette.success.dark,
        },
        "&.MuiLinearProgress-barColorWarning": {
          backgroundColor: theme.palette.warning.dark,
        },
        "&.MuiLinearProgress-barColorError": {
          backgroundColor: theme.palette.error.dark,
        },
      },
    },
  },
});
