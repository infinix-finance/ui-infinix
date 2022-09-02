import { Theme } from "@mui/material";

export const containerStyle = (theme: Theme) => ({
  display: "flex",
  flexDirection: "column",
  backgroundColor: theme.palette.secondary.blackberry,
  width: "17.5rem",
  [theme.breakpoints.up("xl")]: {
    width: "22.5rem",
  },
});

export const contentStyle = (theme: Theme) => ({
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(2),
  gap: theme.spacing(2),
});

export const dividerStyle = (theme: Theme) => ({
  height: "0.25rem",
  backgroundColor: theme.palette.secondary.deeperBlackberry,
});
