import { alpha, Theme } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";

export const buttonOverrides = (theme: Theme): Partial<OverridesStyleRules> => ({
  styleOverrides: {
    root: {
      textTransform: "none",
      boxShadow: "none",
      whiteSpace: "no-wrap",
      minWidth: "maxContent",
      "&:hover": {
        boxShadow: "none",
      },
      color: theme.palette.common.white,
      fontFamily: theme.custom.fontFamily.primary,
      lineHeight: theme.custom.lineHeight.small,
    },
    sizeLarge: {
      padding: "1.125rem",
      fontSize: "1.25rem",
      height: "4rem",
      [theme.breakpoints.down("sm")]: {
        padding: "0.9375rem",
        fontSize: "1.125rem",
        height: "3.5rem",
      },
    },
    sizeMedium: {
      padding: "0.9375rem",
      fontSize: "1.125rem",
      height: "3.5rem",
      [theme.breakpoints.down("sm")]: {
        padding: "0.75rem",
        fontSize: "1rem",
        height: "3rem",
      },
    },
    sizeSmall: {
      padding: "0.6875rem",
      fontSize: "1.125rem",
      height: "3rem",
      [theme.breakpoints.down("sm")]: {
        padding: "0.5625rem",
        fontSize: "1rem",
        height: "2.5rem",
      },
    },
    containedPrimary: {
      backgroundColor: theme.palette.primary.light,
      "&:hover": {
        backgroundColor: alpha(theme.palette.primary.light, theme.custom.opacity.light),
      },
      "&:disabled": {
        backgroundColor: theme.palette.secondary.light,
        color: alpha(theme.palette.common.white, theme.custom.opacity.main),
      },
    },
    outlinedPrimary: {
      borderColor: theme.palette.primary.light,
      color: theme.palette.common.white,
      "&:hover": {
        backgroundColor: alpha(theme.palette.primary.main, theme.custom.opacity.light),
        borderColor: theme.palette.primary.light,
      },
      "&:disabled": {
        borderColor: alpha(theme.palette.common.white, theme.custom.opacity.main),
        color: alpha(theme.palette.common.white, theme.custom.opacity.main),
      },
    },
    textPrimary: {
      color: theme.palette.primary.light,
      "&:hover": {
        backgroundColor: alpha(theme.palette.primary.light, theme.custom.opacity.lighter),
      },
      "&:disabled": {
        color: alpha(theme.palette.common.white, theme.custom.opacity.main),
      },
    },
  },
});
