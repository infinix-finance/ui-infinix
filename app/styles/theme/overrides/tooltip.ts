import { Theme } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";

export const tooltipOverrides = (
  theme: Theme
): Partial<OverridesStyleRules> => ({
  styleOverrides: {
    popper: {
      background: "inherit",
    },
    tooltip: {
      background: theme.palette.common.white,
      border: `1px solid ${theme.palette.common.white}`,
      borderRadius: theme.spacing(1),
      fontFamily: theme.custom.fontFamily.primary,
      color: theme.palette.primary.dark,
      fontSize: "1.125rem",
      [theme.breakpoints.up("md")]: {
        padding: theme.spacing(3),
      },
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(1),
      },
    },
    arrow: {
      color: theme.palette.common.white,
    },
  },
});
