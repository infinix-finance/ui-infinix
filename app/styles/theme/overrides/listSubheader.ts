import { Theme } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";

export const listSubheaderOverrides = (
  theme: Theme
): Partial<OverridesStyleRules> => ({
  styleOverrides: {
    root: {
      background: theme.palette.background.paper,
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
  },
});
