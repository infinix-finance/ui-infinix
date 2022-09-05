import { alpha, Theme } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";

export const tabOverrides = (theme: Theme): Partial<OverridesStyleRules> => ({
  styleOverrides: {
    root: {
      fontFamily: theme.custom.fontFamily.primary,
      fontWeight: 400,
      textTransform: "none",
      color: theme.palette.secondary.graishLavender,
      gap: theme.spacing(1),
      height: "3.5rem",
      borderBottom: `2px solid ${theme.palette.secondary.graishLavender}`,
      "&:hover": {
        background: theme.palette.secondary.blackberry,
      },
      "&.Mui-selected": {
        background: theme.palette.secondary.blackberry,
      },
      "&.Mui-disabled": {
        color: theme.palette.common.white,
        borderBottom: `2px solid ${theme.palette.secondary.light}`,
        opacity: theme.custom.opacity.main,
      },
      "&.MuiTab-labelIcon": {
        minHeight: "auto",
      },
      "& .MuiSvgIcon-root": {
        margin: 0,
      },
    },
  },
});
