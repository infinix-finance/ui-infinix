import React from 'react';
import { useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";

export const Logo: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  if (isMobile) {
    return (
      <Image
        src="/dummy/logo-sm.svg"
        alt="logo"
        width="48"
        height="48"
      />
    );
  } else if (isTablet) {
    return (
      <Image
        src="/dummy/logo-md.svg"
        alt="logo"
        width="120"
        height="48"
      />
    );
  } else if (isDesktop) {
    return (
      <Image
        src="/dummy/logo-lg.svg"
        alt="logo"
        width="130"
        height="40"
      />
    );
  }

  return null;
};
