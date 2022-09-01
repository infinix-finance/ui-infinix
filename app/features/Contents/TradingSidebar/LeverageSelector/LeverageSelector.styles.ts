import { Theme } from "@mui/material";

export const containerStyle = (theme: Theme) => ({
  display: "flex",
  flexDirection: "column",
  gap: 2,

  "& .MuiToggleButton-primary": {
    padding: `${theme.spacing(1)} !important`,
  },
});

export const buyingPowerStyle = (theme: Theme) => ({
  display: "flex",
  justifyContent: "space-between",
});
