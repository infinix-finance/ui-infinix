import { alpha, Theme } from "@mui/material";

export const labelContainerStyle = (theme: Theme) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(0.5),
});

export const extraGapStyle = (theme: Theme) => ({
  gap: theme.spacing(1),
  "& > p:first-of-type": {
    marginTop: theme.spacing(0.5),
  },
});

export const countdownLabelContainerStyle = (theme: Theme) => ({
  backgroundColor: alpha(
    theme.palette.alert.lemon,
    theme.custom.opacity._10percent
  ),
  padding: theme.spacing(1, 1.5),
  borderRadius: "0.5rem",
});

export const withTooltipStyle = (theme: Theme) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(1.5),
});

export const withIconStyle = (positive: boolean) => (theme: Theme) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(1),

  "& > *": {
    color: positive ? theme.palette.alert.lemon : theme.palette.alert.guava,
  },
});

export const infoIconStyle = (theme: Theme) => ({
  color: theme.palette.primary.plum,
  "&:hover": {
    color: theme.palette.primary.deepPlum,
  },
});

export const labelStyle = (theme: Theme) => ({
  fontSize: theme.typography.caption.fontSize,
  [theme.breakpoints.up("xl")]: {
    fontSize: theme.typography.body3.fontSize,
  },
});

export const textStyle = (theme: Theme) => ({
  fontSize: theme.typography.body2.fontSize,
  [theme.breakpoints.up("xl")]: {
    fontSize: theme.typography.subtitle1.fontSize,
  },
});

export const countdownTextStyle = (theme: Theme) => ({
  color: theme.palette.alert.lemon,
  minWidth: "4.5rem",
  [theme.breakpoints.up("xl")]: {
    minWidth: "5.75rem",
  },
});
