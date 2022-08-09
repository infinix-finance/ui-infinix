import { Theme } from "@mui/material";

export const containerStyle = (theme: Theme) => ({
  backgroundColor: theme.palette.secondary.blackberry,
  width: "17.5rem",
  [theme.breakpoints.up("xl")]: {
    width: "20rem",
  },
});

export const contentStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "750px",
};
