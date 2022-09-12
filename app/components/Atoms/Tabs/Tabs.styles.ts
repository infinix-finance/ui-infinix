import { Theme } from "@mui/material";

export const tabsStyle = (overrideColor?: string) => (theme: Theme) => ({
  "& .MuiTabs-indicator": {
    backgroundColor: overrideColor || theme.palette.primary.plum,
  },
});

export const tabStyle = (overrideColor?: string) => (theme: Theme) => ({
  "&.MuiButtonBase-root.Mui-selected": {
    color: overrideColor || theme.palette.primary.plum,
  },
});
