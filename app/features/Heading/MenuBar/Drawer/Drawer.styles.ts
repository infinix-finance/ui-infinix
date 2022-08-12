import { Theme } from "@mui/material";

export const containerStyle = (theme: Theme) => {
  const topSpacing = theme.spacing(9);

  return {
    top: topSpacing,

    "& > .MuiBackdrop-root": {
      top: topSpacing,

      "&:before": {
        content: '" "',
        height: topSpacing,
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: "transparent",
        position: "fixed",
      },
    },

    "& > .MuiPaper-root": {
      backgroundColor: theme.palette.secondary.deepBlackberry,
      borderRadius: "0.5rem 0 0 0.5rem",
      height: "unset",
      padding: 0,
      top: topSpacing,
      bottom: 0,
      width: "17.5rem",
      [theme.breakpoints.up("xl")]: {
        width: "22.5rem",
      },
    },
  };
};

export const titleStyle = (smallerPaddingTop: boolean) => (theme: Theme) => ({
  display: "flex",
  alignItems: "center",
  gap: 2,
  margin: theme.spacing(smallerPaddingTop ? 4 : 10.25, 3, 8),
});

export const iconStyle = (theme: Theme) => ({
  width: "2rem",
  height: "2rem",
  color: theme.palette.primary.plum,
});
