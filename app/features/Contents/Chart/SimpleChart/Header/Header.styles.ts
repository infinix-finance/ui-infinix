import { Theme } from "@mui/material";

export const containerStyle = (_theme: Theme) => ({
  display: "flex",
  flexDirection: "column",
  gap: 2,
});

export const topStyle = (_theme: Theme) => ({
  display: "flex",
  alignItems: "center",
  gap: 2,
});

export const contentStyle = (_theme: Theme) => ({
  display: "flex",
  flexDirection: "column",
  gap: 0.5,
});

export const productStyle = (_theme: Theme) => ({
  display: "flex",
  alignItems: "center",
  gap: 1,
});

export const productButtonStyle = (theme: Theme) => ({
  "& .MuiSvgIcon-root": {
    width: "1rem",
    color: theme.palette.secondary.graishLavender,
  },
});

export const priceAndDetailsStyle = (_theme: Theme) => ({
  display: "flex",
  gap: 2,
});

export const detailsContainerStyle = (_theme: Theme) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: 0.5,
});

export const detailsStyle = (_theme: Theme) => ({
  display: "flex",
  gap: 2,
});

export const buttonGroupStyle = (_theme: Theme) => ({
  "& .MuiButtonBase-root": {
    padding: 1,
  },
});
