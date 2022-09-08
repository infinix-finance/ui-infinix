import { Theme } from "@mui/material";

export const containerStyle = (theme: Theme) => ({
  backgroundColor: theme.palette.secondary.blackberry,
  width: "17.5rem",
  [theme.breakpoints.up("xl")]: {
    width: "22.5rem",
  },
});

export const contentStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "750px",
};

export const titleStyle = {
  marginBottom: "1rem",
};
