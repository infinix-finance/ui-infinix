import { AppBar, Toolbar } from "@mui/material";
import Image from "next/image";

import { appBarStyle, toolBarStyle } from "./Heading.styles";
import { MenuBar } from "./MenuBar";

export const Heading = () => {
  return (
    <AppBar sx={appBarStyle}>
      <Toolbar sx={toolBarStyle}>
        <Image src="/static/logo.svg" alt="App Logo" height={16} width={106} />
        <MenuBar />
      </Toolbar>
    </AppBar>
  );
};
