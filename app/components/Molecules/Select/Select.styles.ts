import { alpha, Theme } from "@mui/material";

export const selectPaperStyle = (maxHeight: number) => (theme: Theme) => ({
  marginTop: "2px",
  padding: 0,
  backgroundColor: theme.palette.secondary.deeperBlackberry,
  maxHeight: theme.spacing(maxHeight),
  [theme.breakpoints.down("sm")]: {
    width: "inherit",
    marginLeft: 0,
    marginTop: 0,
    top: "0 !important",
    left: "0 !important",
    bottom: 0,
    right: 0,
    maxWidth: "100%",
  },

  "&.MuiPaper-root": {
    "& .MuiList-root": {
      paddingTop: 0,

      "& .MuiMenuItem-root": {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        "&.Mui-selected": {
          backgroundColor: theme.palette.secondary.blackberry,
        },
      },
      "& .MuiListSubheader-root": {
        padding: theme.spacing(2),
        backgroundColor: theme.palette.secondary.deeperBlackberry,
      },
    },
  },
});

export const selectBackdropStyle = {
  opacity: "0 !important",
};
