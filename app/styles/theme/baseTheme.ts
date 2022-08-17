import { PaletteMode } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { Shadows } from "@mui/material/styles/shadows";
import { paletteOptions } from "./options";

declare module "@mui/material/styles" {
  interface Theme {
    custom: {
      opacity: {
        lightest: number;
        lighter: number;
        light: number;
        main: number;
        dark: number;
        darker: number;
        darkest: number;
        _5percent: number;
        _10percent: number;
        _20percent: number;
        _30percent: number;
        _60percent: number;
        _80percent: number;
      };
      lineHeight: {
        larger: string;
        large: string;
        medium: string;
        small: string;
        smaller: string;
        tiny: string;
        tiniest: string;
      };
      fontFamily: {
        primary: string;
        secondary: string;
        other: string;
      };
      drawerWidth: {
        desktop: number;
        tablet: number;
        mobile: number;
      };
    };
  }

  interface ThemeOptions {
    custom: {
      opacity?: {
        lightest?: number;
        lighter?: number;
        light?: number;
        main?: number;
        dark?: number;
        darker?: number;
        darkest?: number;
        _5percent?: number;
        _10percent?: number;
        _20percent?: number;
        _30percent?: number;
        _60percent?: number;
        _80percent: number;
      };
      lineHeight?: {
        larger?: string;
        large?: string;
        medium?: string;
        small?: string;
        smaller?: string;
        tiny?: string;
        tiniest?: string;
      };
      fontFamily?: {
        primary?: string;
        secondary?: string;
        other?: string;
      };
      drawerWidth?: {
        desktop?: number;
        tablet?: number;
        mobile?: number;
      };
    };
  }

  interface Palette {
    featured: {
      main: string;
      grape: string;
    };
    alert: {
      blueberry: string;
      deepBlueberry: string;
      deeperBlueberry: string;
      lemon: string;
      deepLemon: string;
      deeperLemon: string;
      guava: string;
      deepGuava: string;
      deeperGuava: string;
      peach: string;
      deepPeach: string;
      deeperPeach: string;
    };
  }

  interface PaletteColor {
    plum: string;
    deepPlum: string;
    ice: string;
    graishLavender: string;
    lavender: string;
    blackberry: string;
    deepBlackberry: string;
    deeperBlackberry: string;
    deepestBlackberry: string;
  }

  interface SimplePaletteColorOptions {
    plum?: string;
    deepPlum?: string;
    ice?: string;
    graishLavender?: string;
    lavender?: string;
    blackberry?: string;
    deepBlackberry?: string;
    deeperBlackberry?: string;
    deepestBlackberry?: string;
  }

  interface PaletteOptions {
    featured: {
      main?: string;
      grape: string;
    };
    alert?: {
      blueberry?: string;
      deepBlueberry?: string;
      deeperBlueberry?: string;
      lemon?: string;
      deepLemon?: string;
      deeperLemon?: string;
      guava?: string;
      deepGuava?: string;
      deeperGuava?: string;
      peach?: string;
      deepPeach?: string;
      deeperPeach?: string;
    };
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    body3: true;
    buttonLarge: true;
    buttonMedium: true;
    buttonSmall: true;
    inputLabel: true;
    inputText: true;
    helperText: true;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    dark: true;
    long: true;
    short: true;
  }
}

// create basic theme with basic design options
export const createBaseTheme = (mode: PaletteMode) =>
  createTheme({
    palette: {
      mode,
      ...paletteOptions[mode],
    },
    spacing: 8,
    mixins: {
      toolbar: {},
    },
    shape: {
      borderRadius: 12,
    },
    zIndex: {
      drawer: 1200,
    },
    shadows: Array(25).fill("none") as Shadows,
    custom: {
      opacity: {
        lightest: 0.02,
        lighter: 0.05,
        light: 0.1,
        main: 0.3,
        dark: 0.5,
        darker: 0.6,
        darkest: 0.8,
        _5percent: 0.05,
        _10percent: 0.1,
        _20percent: 0.2,
        _30percent: 0.3,
        _60percent: 0.6,
        _80percent: 0.8,
      },
      lineHeight: {
        tiniest: "normal",
        tiny: "normal",
        smaller: "normal",
        small: "normal",
        medium: "normal",
        large: "normal",
        larger: "normal",
      },
      fontFamily: {
        primary: "Sora",
        secondary: "Sora",
        other: "Sora",
      },
      drawerWidth: {
        desktop: 320,
        tablet: 240,
        mobile: 240,
      },
    },
  });
