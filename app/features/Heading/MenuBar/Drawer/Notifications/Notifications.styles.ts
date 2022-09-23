import { Theme } from "@mui/material";

export const containerStyle = (_theme: Theme) => ({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  gap: 4,
  overflow: "hidden",
});

export const emptyContainerStyle = (_theme: Theme) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  flex: 1,
  gap: 3,
  marginBottom: 4,
});

export const bellIconStyle = (theme: Theme) => ({
  width: "4rem",
  height: "4rem",
  color: theme.palette.primary.plum,
});

export const buttonStyle = (_theme: Theme) => ({
  alignSelf: "flex-end",
  marginRight: 3,
});

export const listStyle = (theme: Theme) => ({
  display: "flex",
  flexDirection: "column",
  gap: 2,
  overflowY: "auto",
  padding: theme.spacing(0, 2, 0, 3),
});
