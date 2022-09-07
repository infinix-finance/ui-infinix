import { AppState, CustomStateCreator } from "../../types";
import { PriceUpdate } from "@/types/api";

interface PriceHistoryProps {
  latest: string;
  history: PriceUpdate[];
}

export interface PriceHistorySlice {
  price: PriceHistoryProps & {
    setPriceFeed: (prices: PriceUpdate[]) => void;
  };
}

export const createPriceHistorySlice: CustomStateCreator<PriceHistorySlice> = (
  set,
  _get
) => ({
  price: {
    latest: "0",
    history: [],
    setPriceFeed: (feed: PriceUpdate[]) => {
      set(function setPriceFeed(state: AppState) {
        const latest = feed[0] ? feed[feed.length - 1].price : "0";
        state.price.latest = latest;
        state.price.history = feed;
      });
    },
  },
});
