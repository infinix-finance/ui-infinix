import { Theme } from "@mui/material";

export const containerStyle = (hideScrollBar: boolean) => (theme: Theme) => ({
  display: "flex",
  flexDirection: "row",
  position: "relative",
  backgroundColor: theme.palette.secondary.deeperBlackberry,
  flex: 1,
  overflowY: hideScrollBar ? "hidden" : "auto",
  overflowX: "hidden",
});

export const mainContentStyle = (theme: Theme) => ({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  [theme.breakpoints.up("lg")]: {
    padding: theme.spacing(2, 4),
  },
  [theme.breakpoints.up("xl")]: {
    padding: theme.spacing(2, 6),
  },
});

export const midContainerStyle = (theme: Theme) => ({
  display: "flex",
  flex: 1,
  gap: theme.spacing(3),
});
