/* istanbul ignore file */
import { Box } from "@mui/material";

import { Contents } from "./Contents";
import { Heading } from "./Heading";
import { containerStyle } from "./MainPage.styles";

import { useMetamaskConnection } from "@/hooks/wallet";
import { useSocketConnection, useSocketAmmInfo } from "@/hooks/socket";
import { useNotistack } from "@/hooks/useNotistack";

export const MainPage = () => {
  useMetamaskConnection();
  useSocketConnection();
  // TODO: Remove after testing
  useSocketAmmInfo("0xe5639cbb02ec3bd65c77e128b0c7350aeefb2bd1");
  useNotistack();

  return (
    <Box sx={containerStyle}>
      <Heading />
      <Contents />
    </Box>
  );
};
