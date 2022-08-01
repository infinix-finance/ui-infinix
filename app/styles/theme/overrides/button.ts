import { alpha, Theme } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";

export const buttonOverrides = (
  theme: Theme
): Partial<OverridesStyleRules> => ({
  styleOverrides: {
    root: {
      textTransform: "none",
      boxShadow: "none",
      whiteSpace: "no-wrap",
      minWidth: "maxContent",
      borderRadius: "0.5rem",
      fontWeight: "500",
      "&:hover": {
        boxShadow: "none",
      },
      color: theme.palette.common.white,
      fontFamily: theme.custom.fontFamily.primary,
      lineHeight: theme.custom.lineHeight.small,
    },
    sizeLarge: {
      padding: "1.25rem",
      fontSize: "1.5rem",
      height: "4rem",
    },
    sizeMedium: {
      padding: "0.875rem",
      fontSize: "0.875rem",
      height: "3rem",
    },
    sizeSmall: {
      padding: "0.5rem",
      fontSize: "0.75rem",
      height: "2rem",
    },
    containedPrimary: {
      color: theme.palette.secondary.deepestBlackberry,
      backgroundColor: theme.palette.primary.plum,
      "&:hover": {
        backgroundColor: theme.palette.primary.deepPlum,
      },
      "&:disabled": {
        color: theme.palette.secondary.deepestBlackberry,
        backgroundColor: theme.palette.secondary.graishLavender,
      },
    },
    outlinedPrimary: {
      color: theme.palette.primary.plum,
      borderColor: "transparent",
      backgroundColor: alpha(
        theme.palette.primary.plum,
        theme.custom.opacity._10percent
      ),
      "&:hover": {
        borderColor: "transparent",
        backgroundColor: alpha(
          theme.palette.primary.plum,
          theme.custom.opacity._30percent
        ),
      },
      "&:disabled": {
        borderColor: "transparent",
        color: theme.palette.secondary.graishLavender,
      },
    },
    textPrimary: {
      color: theme.palette.primary.plum,
      backgroundColor: "transparent",
      "&:hover": {
        backgroundColor: alpha(
          theme.palette.primary.plum,
          theme.custom.opacity._10percent
        ),
      },
      "&:disabled": {
        color: theme.palette.secondary.graishLavender,
      },
    },
  },
  variants: [
    {
      props: {
        variant: "dark" as const,
      },
      style: {
        backgroundColor: alpha(
          theme.palette.secondary.deepestBlackberry,
          theme.custom.opacity._10percent
        ),
        color: theme.palette.secondary.deepestBlackberry,
        "&:hover": {
          backgroundColor: alpha(
            theme.palette.secondary.deepestBlackberry,
            theme.custom.opacity._20percent
          ),
        },
        "&:disabled": {
          color: theme.palette.secondary.lavender,
        },
      },
    },
    {
      props: {
        variant: "long" as const,
      },
      style: {
        backgroundColor: theme.palette.alert.lemon,
        color: theme.palette.secondary.deepestBlackberry,
        "&:hover": {
          backgroundColor: theme.palette.alert.deepLemon,
        },
        "&:disabled": {
          backgroundColor: theme.palette.secondary.graishLavender,
          color: theme.palette.secondary.deepestBlackberry,
        },
      },
    },
    {
      props: {
        variant: "short" as const,
      },
      style: {
        backgroundColor: theme.palette.alert.guava,
        color: theme.palette.secondary.deepestBlackberry,
        "&:hover": {
          backgroundColor: theme.palette.alert.deepGuava,
        },
        "&:disabled": {
          backgroundColor: theme.palette.secondary.graishLavender,
          color: theme.palette.secondary.deepestBlackberry,
        },
      },
    },
  ],
});
