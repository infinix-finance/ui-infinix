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
    clear: () => void;
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
        const [latest] = feed.history.slice(-1);
        state.priceHistory.latest = latest?.price || "0";
        state.priceHistory.feed = feed.history;
      });
    },

    clear: () => {
      set(function clear(state: AppState) {
        state.priceHistory.latest = "0";
        state.priceHistory.feed = [];
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

export const getLatestPriceInfo = (state: AppState) => {
  const [first] = state.priceHistory.feed.slice(0);
  const firstPrice = toTokenUnit(first?.price || 0);
  const lastPrice = toTokenUnit(state.priceHistory.latest || 0);
  const change = lastPrice.minus(firstPrice);
  const percentageChange =
    lastPrice
      .div(firstPrice)
      .multipliedBy(100)
      .multipliedBy(change.lt(0) ? -1 : 1)
      .toNumber() || 0;

  return {
    lastPrice,
    change,
    percentageChange,
  };
};
