import { Theme } from "@mui/material";

export const containerStyle = (theme: Theme) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  gap: theme.spacing(1.5),
});

export const actionButtonStyle = {};

export const rightButtonStyle = {
  minWidth: "2rem",
  width: "2rem",

  "& svg": {
    width: "1rem",
    height: "1rem",
  },
};
