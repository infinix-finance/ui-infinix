/* istanbul ignore file */
import { Box } from "@mui/material";

import { Contents } from "./Contents";
import { Heading } from "./Heading";

import { useMetamaskConnection } from "@/hooks/wallet";

import { containerStyle } from "./MainPage.styles";
import { useNotistack } from "@/hooks/useNotistack";
import { useSocketConnection, useSocketMessages } from "@/hooks/socket";

export const MainPage = () => {
  useMetamaskConnection();
  useNotistack();
  useSocketConnection();
  useSocketMessages();

  return (
    <Box sx={containerStyle}>
      <Heading />
      <Contents />
    </Box>
  );
};
