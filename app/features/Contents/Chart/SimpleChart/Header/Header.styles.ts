import { Theme } from "@mui/material";

export const containerStyle = (theme: Theme) => ({
  display: "flex",
  flexDirection: "column",
  gap: 2,
});

export const topStyle = (theme: Theme) => ({
  display: "flex",
  alignItems: "center",
  gap: 2,
});

export const contentStyle = (theme: Theme) => ({
  display: "flex",
  flexDirection: "column",
  gap: 0.5,
});

export const productStyle = (theme: Theme) => ({
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

export const priceAndDetailsStyle = (theme: Theme) => ({
  display: "flex",
  gap: 2,
});

export const detailsContainerStyle = (theme: Theme) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: 0.5,
});

export const detailsStyle = (theme: Theme) => ({
  display: "flex",
  gap: 2,
});

export const buttonGroupStyle = (theme: Theme) => ({
  "& .MuiButtonBase-root": {
    padding: 1,
  },
});
