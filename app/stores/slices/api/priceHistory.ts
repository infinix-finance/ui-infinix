import { AppState, CustomStateCreator } from "../../types";
import { PriceUpdate } from "@/types/api";

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
    setPriceFeed: (feed: PriceUpdate[]) => {
      set(function setPriceFeed(state: AppState) {
        const latest = feed[0] ? feed[feed.length - 1].price : "0";
        state.priceHistory.latest = latest;
        state.priceHistory.feed = feed;
      });
    },
  },
});
