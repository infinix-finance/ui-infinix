import { Theme } from "@mui/material";

export const containerStyle = (theme: Theme) => ({
  display: "flex",
  flexDirection: "row",
  backgroundColor: theme.palette.secondary.deeperBlackberry,
  flex: 1,
  overflowY: "auto",
});

export const mainContentStyle = (theme: Theme) => ({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  gap: theme.spacing(2),
  padding: theme.spacing(2, 4),
  [theme.breakpoints.up("xl")]: {
    padding: theme.spacing(2, 6),
  },
});

export const midContainerStyle = (theme: Theme) => ({
  display: "flex",
  flex: 1,
  gap: theme.spacing(3),
});
