import { useTheme, useMediaQuery } from "@mui/material";

export const useLayout = () => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // < 600px
  const isTablet = useMediaQuery(theme.breakpoints.down("md")); // < 900px
  const isDesktop = useMediaQuery(theme.breakpoints.up("md")); // >= 900px

  const isXlUp = useMediaQuery(theme.breakpoints.up("xl")); // >= 1536px
  const isXlDown = useMediaQuery(theme.breakpoints.down("xl")); // < 1536px
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg")); // >= 1200px
  const isLgDown = useMediaQuery(theme.breakpoints.down("lg")); // < 1200px
  const isMdUp = useMediaQuery(theme.breakpoints.up("md")); // >= 900px
  const isMdDown = useMediaQuery(theme.breakpoints.down("md")); // < 900px
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm")); // >= 600px
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm")); // < 600px

  return {
    isMobile,
    isTablet,
    isDesktop,
    isXlUp,
    isXlDown,
    isLgUp,
    isLgDown,
    isMdUp,
    isMdDown,
    isSmUp,
    isSmDown,
  };
};
