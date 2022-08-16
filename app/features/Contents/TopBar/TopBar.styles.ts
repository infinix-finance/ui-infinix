import { Theme } from "@mui/material";

export const containerStyle = (theme: Theme) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  height: "4rem",
});

export const dropdownContainerStyle = (theme: Theme) => ({
  display: "flex",
  gap: theme.spacing(1),

  [theme.breakpoints.up("lg")]: {
    gap: theme.spacing(2),
  },
});

export const selectStyle = (theme: Theme) => ({
  "& .MuiSelect-select > .MuiBox-root > .MuiBox-root:first-of-type": {
    display: "none",
  },

  [theme.breakpoints.up("lg")]: {
    "& .MuiSelect-select > .MuiBox-root > .MuiBox-root:first-of-type": {
      display: "flex !important",
    },
  },
});
