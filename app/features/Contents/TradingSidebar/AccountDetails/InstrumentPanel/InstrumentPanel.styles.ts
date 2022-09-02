import { Theme } from "@mui/material";

export const containerStyle = (theme: Theme) => ({
  position: "relative",
  display: "flex",
  height: "2.5rem",
});

export const alertLevelStyle = (theme: Theme) => ({
  flex: 1,
  height: "1rem",
  backgroundColor: theme.palette.alert.guava,
});

export const mediumLevelStyle = (theme: Theme) => ({
  flex: 1,
  height: "1rem",
  backgroundColor: theme.palette.alert.peach,
});

export const safeLevelStyle = (theme: Theme) => ({
  flex: 1,
  height: "1rem",
  backgroundColor: theme.palette.alert.lemon,
});

export const indicatorStyle = (percentage: number) => (theme: Theme) => ({
  position: "absolute",
  width: "2px",
  height: "1.5rem",
  left: `${percentage}%`,
  backgroundColor: theme.palette.common.white,
});

export const indicatorTextStyle = (percentage: number) => (theme: Theme) => ({
  position: "absolute",
  top: "1.75rem",
  left: `${percentage}%`,
  transform: `translateX(${
    percentage < 3 ? 0 : percentage > 95 ? -100 : -50
  }%)`,
});
