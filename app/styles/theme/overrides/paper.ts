import { Theme } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";

export const paperOverrides = (theme: Theme): Partial<OverridesStyleRules> => ({
  styleOverrides: {
    root: {
      padding: theme.spacing(2),
      backgroundImage: "none",
    },
    outlined: {
      border: `1px solid ${theme.palette.primary.main}`,
      "& img": {
        mixBlendMode: "luminosity",
      },
    },
  },
});
