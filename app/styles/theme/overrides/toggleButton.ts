import { alpha, Theme } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";

export const toggleButtonOverrides = (
  theme: Theme
): Partial<OverridesStyleRules> => ({
  styleOverrides: {
    root: {
      gap: theme.spacing(2),

      "& .MuiToggleButtonGroup-grouped": {
        border: 0,
        lineHeight: "normal",
        padding: theme.spacing(2),
        color: theme.palette.primary.plum,
        "&.Mui-disabled": {
          border: 0,
        },
        "&:hover": {
          backgroundColor: alpha(
            theme.palette.primary.plum,
            theme.custom.opacity._10percent
          ),
        },
        "&.Mui-selected": {
          color: theme.palette.primary.plum,
          backgroundColor: alpha(
            theme.palette.primary.plum,
            theme.custom.opacity._30percent
          ),
          "&:hover": {
            backgroundColor: alpha(
              theme.palette.primary.plum,
              theme.custom.opacity._10percent
            ),
          },
        },
        "&:not(:first-of-type)": {
          borderRadius: "0.5rem",
        },
        "&:first-of-type": {
          borderRadius: "0.5rem",
        },
      },
      "& .MuiToggleButton-primary": {
        color: theme.palette.primary.plum,
        backgroundColor: theme.palette.secondary.deepBlackberry,
        "&:hover": {
          color: theme.palette.secondary.deepestBlackberry,
          backgroundColor: theme.palette.primary.plum,
        },
        "&.Mui-selected": {
          color: theme.palette.secondary.deepestBlackberry,
          backgroundColor: theme.palette.primary.plum,
          "&:hover": {
            backgroundColor: theme.palette.primary.plum,
          },
        },
      },
    },
  },
});
