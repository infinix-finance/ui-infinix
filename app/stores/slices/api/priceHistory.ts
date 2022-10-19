import { PriceUpdate } from "@/types/api";
import { AppState, CustomStateCreator } from "../../types";

import { calculateChange, calculateChangePercentage } from "@/utils/calcs";
import { toTokenUnit } from "@/utils/formatters";
import { handleError } from "../slices.utils";

interface PriceHistoryProps {
  latest: string;
  feed: PriceUpdate[];
  ready: boolean;
}

export interface PriceHistorySlice {
  priceHistory: PriceHistoryProps & {
    setPriceFeed: (feed: { history: PriceUpdate[] }) => void;
    setReady: (ready: boolean) => void;
    clear: () => void;
  };
}

export const createPriceHistorySlice: CustomStateCreator<PriceHistorySlice> = (
  set,
  get
) => ({
  priceHistory: {
    latest: "0",
    feed: [],
    ready: false,

    setPriceFeed: (feed: { history: PriceUpdate[] }) => {
      if (handleError(get(), feed)) {
        return;
      }

      set(function setPriceFeed(state: AppState) {
        const [latest] = feed.history.slice(-1);
        state.priceHistory.latest = latest?.price || "0";
        state.priceHistory.feed = feed.history;
        state.priceHistory.ready = true;
      });
    },

    setReady: (ready: boolean) => {
      set(function setReady(state: AppState) {
        state.priceHistory.ready = ready;
      });
    },

    clear: () => {
      get().priceHistory.setReady(false);

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
  const [penultimate] = state.priceHistory.feed.slice(-2, -1);
  const penultimatePrice = toTokenUnit(penultimate?.price);
  const lastPrice = toTokenUnit(state.priceHistory.latest);
  const change = calculateChange(lastPrice, penultimatePrice);
  const percentageChange = change
    ? calculateChangePercentage(lastPrice, penultimatePrice).toNumber()
    : 0;

  return {
    lastPrice,
    change,
    percentageChange,
  };
};
