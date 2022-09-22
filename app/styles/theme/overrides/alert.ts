import { Theme } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";

export const alertOverrides = (theme: Theme): Partial<OverridesStyleRules> => ({
  styleOverrides: {
    root: {
      borderRadius: "0.5rem",
      "& .MuiSvgIcon-root": {
        fill: theme.palette.secondary.deepestBlackberry,
      },
      "& .MuiAlert-icon": {
        display: "grid",
        alignItems: "center",
      },
      "& .MuiAlert-message": {
        display: "flex",
        alignItems: "center",
        width: "100%",
      },
      "& .MuiAlert-action": {
        display: "flex",
        alignItems: "center",
        padding: 0,
        marginRight: 0,
      },
    },
    filledSuccess: {
      background: theme.palette.success.main,
    },
    filledError: {
      background: theme.palette.error.main,
    },
    filledInfo: {
      background: theme.palette.info.main,
    },
    filledWarning: {
      background: theme.palette.warning.main,
    },
  },
});
