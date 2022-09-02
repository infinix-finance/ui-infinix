import { alpha, Theme } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";

export const tabsOverrides = (theme: Theme): Partial<OverridesStyleRules> => ({
  styleOverrides: {
    root: {
      minHeight: "3.5rem",
      "& .MuiTabs-indicator": {
        backgroundColor: theme.palette.primary.plum,
      },
    },
  },
});
