import { alpha, Theme } from "@mui/material";

import { OverridesStyleRules } from "@mui/material/styles/overrides";

export const inputOverrides = (theme: Theme): Partial<OverridesStyleRules> => ({
  styleOverrides: {
    root: {
      color: theme.palette.primary.ice,
      backgroundColor: alpha(
        theme.palette.primary.ice,
        theme.custom.opacity._5percent
      ),
      height: "4rem",
      "&.MuiOutlinedInput-root": {
        "&:not(.Mui-error)": {
          "& fieldset.MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.secondary.lavender,
          },
        },
        "&.Mui-disabled": {
          "& fieldset.MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.secondary.lavender,
            backgroundColor: alpha(
              theme.palette.primary.ice,
              theme.custom.opacity._10percent
            ),
          },
        },
        "&.Mui-focused:not(.Mui-error)": {
          "& fieldset.MuiOutlinedInput-notchedOutline": {
            border: `1px solid ${theme.palette.primary.plum}`,
            backgroundColor: alpha(
              theme.palette.primary.plum,
              theme.custom.opacity._20percent
            ),
          },
        },
        "&.Mui-error": {
          "& .MuiOutlinedInput-input": {
            color: theme.palette.alert.guava,
          },
          "& fieldset.MuiOutlinedInput-notchedOutline": {
            border: `1px solid ${theme.palette.alert.guava}`,
          },
        },
        "&.MuiInputBase-adornedStart": {
          paddingLeft: theme.spacing(2),
        },
        "& .MuiOutlinedInput-input": {
          fontWeight: 300,
          fontSize: "1rem",
          paddingLeft: theme.spacing(2),
          paddingRight: theme.spacing(2),
          "&::placeholder": {
            color: theme.palette.primary.ice,
            opacity: theme.custom.opacity._60percent,
          },
          "&.Mui-disabled": {
            WebkitTextFillColor: "unset",
            color: theme.palette.secondary.graishLavender,
            "& .MuiTypography-root": {
              color: alpha(
                theme.palette.primary.ice,
                theme.custom.opacity._30percent
              ),
            },
          },
        },
      },
      "& .MuiSelect-outlined": {
        "& .MuiTypography-root": {
          fontWeight: 300,
        },
      },
    },
  },
});
