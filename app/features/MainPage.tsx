/* istanbul ignore file */
import { useContractConnection } from "@/hooks/contracts";
import {
  useSocketAmmInfo,
  useSocketConnection,
  useSocketPriceFeed,
  useSocketRecentPositions,
  useSocketUserPositions,
} from "@/hooks/socket";
import { useNotistack } from "@/hooks/useNotistack";
import { useMetamaskConnection } from "@/hooks/wallet";
import { Contents } from "./Contents";
import { Heading } from "./Heading";
import { Loader } from "./Loader";

export const MainPage = () => {
  useMetamaskConnection();
  useContractConnection();
  useSocketConnection();

  // TODO: Remove after testing
  useSocketAmmInfo("0xe5639cbb02ec3bd65c77e128b0c7350aeefb2bd1");
  useSocketPriceFeed(
    "0xc197aeec5e904b487c37360d0044097a925037f038c6d2b7d92ad20bc689539e"
  );
  useSocketUserPositions("0xb9c3a80c8e903df935f1cdf9688f5bd154002b8b");
  useSocketRecentPositions("0xe5639cbb02ec3bd65c77e128b0c7350aeefb2bd1");

  useNotistack();

  return (
    <Loader>
      <Heading />
      <Contents />
    </Loader>
  );
};
