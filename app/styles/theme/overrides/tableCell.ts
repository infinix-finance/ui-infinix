import { alpha, Theme } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";

export const tableCellOverrides = (theme: Theme): Partial<OverridesStyleRules> => ({
  styleOverrides: {
    head: {
      color: alpha(
        theme.palette.common.white,
        theme.custom.opacity.darker
      ),
      border: "none",
      padding: 0,
      paddingLeft: theme.spacing(4),
    },
    body: {
      border: `1px solid ${alpha(
        theme.palette.common.white,
        theme.custom.opacity.main
      )}`,
      borderStyle: "solid none",
      padding: theme.spacing(4),
      "&:first-of-type": {
        borderLeftStyle: "solid",
        borderTopLeftRadius: theme.spacing(1.5),
        borderBottomLeftRadius: theme.spacing(1.5),
      },
      "&:last-of-type": {
        borderRightStyle: "solid",
        borderTopRightRadius: theme.spacing(1.5),
        borderBottomRightRadius: theme.spacing(1.5),
      },
    },
  },
});