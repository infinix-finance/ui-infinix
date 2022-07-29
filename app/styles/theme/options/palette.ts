import { alpha, PaletteOptions } from "@mui/material";

export const paletteOptions = {
  dark: {
    primary: {
      main: "#FF8500",
      light: "#F15700",
      dark: "#0C0600",
    },
    secondary: {
      main: "#AA2900",
      light: "#372B1E",
      dark: "#150B00",
    },
    info: {
      main: "#0286FF",
      light: "#004686",
      dark: "#001931",
    },
    success: {
      main: "#009B6D",
      light: "#005A3F",
      dark: "#002C1E",
    },
    error: {
      main: "#E10036",
      light: "#850020",
      dark: "#450011",
    },
    warning: {
      main: "#C59A04",
      light: "#846700",
      dark: "#2E2400",
    },
    common: {
      white: "#FFFFFF",
      black: "#000000",
    },
    featured: {
      main: "#33C500",
    },
    gradient: {
      primary:
        "linear-gradient(180deg, rgba(12, 6, 0, 0.8) 0%, rgba(21, 11, 0, 0.8) 82.99%)",
      secondary:
        "linear-gradient(180deg, rgba(12, 6, 0, 0) 63.64%, rgba(12, 6, 0, 0.8) 116.45%)",
    },
  } as PaletteOptions,
  light: {
    common: {
      white: "#FFFFFF",
      black: "#000000",
    },
    featured: {
      main: "#33C500",
    },
    gradient: {
      primary:
        "linear-gradient(180deg, rgba(12, 6, 0, 0.8) 0%, rgba(21, 11, 0, 0.8) 82.99%)",
      secondary:
        "linear-gradient(180deg, rgba(12, 6, 0, 0) 63.64%, rgba(12, 6, 0, 0.8) 116.45%)",
    },
  } as PaletteOptions,
};
