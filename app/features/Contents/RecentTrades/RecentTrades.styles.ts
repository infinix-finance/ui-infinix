import { Theme } from "@mui/material";

export const containerStyle = (theme: Theme) => ({
  backgroundColor: theme.palette.secondary.blackberry,
  height: "100%",
  width: "17.5rem",
  borderRadius: "0.5rem",
  overflowY: "hidden",
  [theme.breakpoints.up("xl")]: {
    width: "22.5rem",
  },

  "& .MuiTableRow-root": {
    backgroundColor: "transparent",

    "& .MuiTableCell-root.MuiTableCell-head": {
      padding: theme.spacing(2, 0.5),
    },

    "& .MuiTableCell-root.MuiTableCell-body": {
      padding: theme.spacing(1, 0.5),
    },

    "& .MuiTableCell-root:first-of-type": {
      paddingLeft: theme.spacing(2),
    },

    "& .MuiTableCell-root:last-of-type": {
      paddingRight: theme.spacing(2),
    },

    "& .MuiTypography-root": {
      fontSize: theme.typography.body2.fontSize,
    },
  },
});
