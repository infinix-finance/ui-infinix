import { secondsToMilliseconds } from "date-fns";

import { AppState, CustomStateCreator } from "../../types";
import { PriceUpdate } from "@/types/api";
import { toTokenUnit } from "@/utils/formatters";

interface PriceHistoryProps {
  latest: string;
  feed: PriceUpdate[];
}

export interface PriceHistorySlice {
  priceHistory: PriceHistoryProps & {
    setPriceFeed: (feed: PriceUpdate[]) => void;
  };
}

export const createPriceHistorySlice: CustomStateCreator<PriceHistorySlice> = (
  set,
  _get
) => ({
  priceHistory: {
    latest: "0",
    feed: [],
    setPriceFeed: (feed: any) => {
      // TODO
      set(function setPriceFeed(state: AppState) {
        const [latest] = feed.history.slice(-1) || "0";
        state.priceHistory.latest = latest;
        state.priceHistory.feed = feed.history;
      });
    },
  },
});

export const getHistoryData = (state: AppState) => {
  return state.priceHistory.feed.map(({ price, timestamp }) => {
    const convertedPrice = toTokenUnit(price).toNumber();

    return {
      time: timestamp,
      value: convertedPrice,
    };
  });
};
