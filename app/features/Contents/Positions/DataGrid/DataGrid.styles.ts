import { alpha, Theme } from "@mui/material";

export const tableStyle = (theme: Theme) => ({
  borderCollapse: "collapse",
});

export const headRowStyle = (theme: Theme) => ({
  backgroundColor: theme.palette.secondary.blackberry,

  "& th": {
    padding: theme.spacing(1.5),
    border: "0px",
    color: theme.palette.secondary.graishLavender,

    "&:first-of-type": {
      paddingLeft: theme.spacing(3),
    },
  },
});

export const rowStyle = (theme: Theme) => ({
  backgroundColor: theme.palette.secondary.deepBlackberry,

  "&.MuiTableRow-hover:hover": {
    backgroundColor: alpha(
      theme.palette.primary.plum,
      theme.custom.opacity._20percent
    ),
    "& td:first-of-type": {
      boxShadow: `inset 2px 0 0 0 ${theme.palette.primary.plum}`,
    },
  },

  "& td": {
    padding: theme.spacing(1.5),
    border: "0px",

    "&:first-of-type": {
      paddingLeft: theme.spacing(3),
      borderRadius: 0,
    },
  },
});

export const shareIconStyle = {
  width: "0.875rem",
  height: "0.875rem",
};
