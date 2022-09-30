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
  useNotistack();
  useMetamaskConnection();
  useContractConnection();
  useSocketConnection();
  useSocketAmmInfo();
  useSocketRecentPositions();
  useSocketPriceFeed();

  // TODO: Remove after testing
  useSocketUserPositions("0xb9c3a80c8e903df935f1cdf9688f5bd154002b8b");

  return (
    <Loader>
      <Heading />
      <Contents />
    </Loader>
  );
};
