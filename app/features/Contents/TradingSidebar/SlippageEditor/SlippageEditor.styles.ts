import { Theme } from "@mui/material";

export const containerStyle = (_theme: Theme) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const slippageLabelStyle = (isValid: boolean) => (theme: Theme) => ({
  color: isValid
    ? theme.palette.primary.ice
    : theme.palette.secondary.graishLavender,
});

export const actionStyle = (_theme: Theme) => ({
  display: "flex",
  alignItems: "center",
  gap: 3,
});

export const iconStyle = {
  width: "1rem",
  height: "1rem",
};

export const dropdownContainerStyle = (theme: Theme) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: theme.spacing(1),
  width: "400px",
  height: "200px",
  backgroundColor: theme.palette.secondary.deeperBlackberry,
  border: "0.1rem solid dimgray",
  borderRadius: "12px",

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
