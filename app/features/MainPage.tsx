/* istanbul ignore file */
import { Box } from "@mui/material";

import { Contents } from "./Contents";
import { Heading } from "./Heading";
import { containerStyle } from "./MainPage.styles";

import { useMetamaskConnection } from "@/hooks/wallet";
import { useNotistack } from "@/hooks/useNotistack";
import {
  useSocketConnection,
  useSocketAmmInfo,
  useSocketPriceFeed,
  useSocketUserPositions,
} from "@/hooks/socket";

export const MainPage = () => {
  useMetamaskConnection();
  useSocketConnection();

  // TODO: Remove after testing
  useSocketAmmInfo("0xe5639cbb02ec3bd65c77e128b0c7350aeefb2bd1");
  useSocketPriceFeed(
    "0xc197aeec5e904b487c37360d0044097a925037f038c6d2b7d92ad20bc689539e"
  );
  useSocketUserPositions("0xb9c3a80c8e903df935f1cdf9688f5bd154002b8b");
  useNotistack();

  return (
    <Box sx={containerStyle}>
      <Heading />
      <Contents />
    </Box>
  );
};
