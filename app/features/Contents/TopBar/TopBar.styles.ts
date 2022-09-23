import { Theme } from "@mui/material";

export const containerStyle = (_theme: Theme) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  height: "4rem",
});

export const dropdownContainerStyle = (theme: Theme) => ({
  display: "flex",
  gap: theme.spacing(1),

  [theme.breakpoints.up("xl")]: {
    gap: theme.spacing(2),
  },
});

export const selectStyle = (theme: Theme) => ({
  "& .MuiSelect-select > .MuiBox-root > .MuiBox-root:first-of-type": {
    display: "none",
  },

  [theme.breakpoints.up("xl")]: {
    "& .MuiSelect-select > .MuiBox-root > .MuiBox-root:first-of-type": {
      display: "flex !important",
    },
  },
});
