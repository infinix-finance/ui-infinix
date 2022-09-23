import { alpha, Theme } from "@mui/material";

export const tableStyle = (empty: boolean) => (_theme: Theme) =>
  ({
    borderCollapse: "collapse",
    height: empty ? "100%" : undefined,
  } as const);

export const headRowStyle = (theme: Theme) => ({
  "& th": {
    padding: theme.spacing(1.5),
    border: "0px",
    color: theme.palette.secondary.graishLavender,
    backgroundColor: theme.palette.secondary.blackberry,

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
    "&:last-of-type": {
      borderRadius: 0,
    },
  },
});

export const emptyBodyStyle = (theme: Theme) => ({
  height: "10rem",
  border: "0px",
  backgroundColor: theme.palette.secondary.deepBlackberry,

  "&:first-of-type": {
    borderRadius: 0,
  },
  "&:last-of-type": {
    borderRadius: 0,
  },
});

export const contentStyle = (_theme: Theme) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 2,
});
