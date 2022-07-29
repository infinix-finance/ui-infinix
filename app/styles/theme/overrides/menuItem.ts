import { alpha, Theme } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";

export const menuItemOverrides = (theme: Theme): Partial<OverridesStyleRules> => ({
  styleOverrides: {
    gutters: {
      padding: theme.spacing(2.25, 3),
      "&:hover": {
        background: alpha(
          theme.palette.primary.main,
          theme.custom.opacity.lighter
        ),
      },
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(1.875, 2),
      },
    },
  },
});