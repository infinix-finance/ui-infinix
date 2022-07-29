import { alpha, Theme } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";

export const listItemOverrides = (theme: Theme): Partial<OverridesStyleRules> => ({
  styleOverrides: {
    root: {
      padding: theme.spacing(2, 2, 2, 3),
      height: theme.spacing(10),
      "&.Mui-selected": {
        backgroundColor: (
          alpha(
            theme.palette.primary.light,
            theme.custom.opacity.lighter,
          )
        ),
      },
    },
  },
});