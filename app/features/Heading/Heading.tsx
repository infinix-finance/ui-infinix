import { AppBar, Button, ButtonGroup, Toolbar } from "@mui/material";
import Image from "next/image";
import { ButtonBar } from "./ButtonBar";

import { appBarStyle, toolBarStyle } from "./Heading.styles";

export const Heading = () => {
  return (
    <AppBar sx={appBarStyle}>
      <Toolbar sx={toolBarStyle}>
        <Image src="/static/logo.svg" alt="App Logo" height={16} width={106} />
        <ButtonBar />
      </Toolbar>
    </AppBar>
  );
};
