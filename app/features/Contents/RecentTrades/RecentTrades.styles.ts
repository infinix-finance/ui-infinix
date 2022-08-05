import { Theme } from "@mui/material";

export const containerStyle = (theme: Theme) => ({
  backgroundColor: theme.palette.secondary.blackberry,
  height: "100%",
  width: "17.5rem",
  [theme.breakpoints.up("xl")]: {
    width: "22.5rem",
  },
});
