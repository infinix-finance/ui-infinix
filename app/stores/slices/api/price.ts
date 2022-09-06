import { AppState, CustomStateCreator } from "../../types";
import { PriceUpdate } from "@/types/api";

interface PriceProps {
  latest: string;
  history: PriceUpdate[];
}

export interface PriceSlice {
  price: PriceProps & {
    setPriceFeed: (prices: PriceUpdate[]) => void;
  };
}

export const createPriceSlice: CustomStateCreator<PriceSlice> = (
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
