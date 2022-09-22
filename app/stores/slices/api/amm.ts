import { secondsToMilliseconds } from "date-fns";

import { Amm } from "@/types/api";
import {
  formatPercentage,
  formatUsdValue,
  toTokenUnit,
} from "@/utils/formatters";
import { AppState, CustomStateCreator } from "../../types";

const getDefaultData = () => ({
  id: "",
  quoteAsset: "",
  priceFeedKey: "",
  fundingPeriod: 0,
  fundingBufferPeriod: 0,
  lastFunding: 0,
  fundingRate: "",
  tradeLimitRatio: "",
  tradingVolume: "",
  underlyingPrice: "",
  dataFeedId: "",
  price: 0,
  nextFunding: 0,
});

export interface AmmSlice {
  amm: Amm & {
    setAmmInfo: (amm: Amm) => void;
    clear: () => void;
  };
}

export const createAmmSlice: CustomStateCreator<AmmSlice> = (set, _get) => ({
  amm: {
    ...getDefaultData(),

    setAmmInfo: (amm: Amm) => {
      set(function setAmmInfo(state: AppState) {
        state.amm = { ...state.amm, ...amm };
      });
    },

    clear: () => {
      set(function clear(state: AppState) {
        state.amm = {
          ...state.amm,
          ...getDefaultData(),
        };
      });
    },
  },
});

export const getTopBarValues = (state: AppState) => {
  const rawMarkPrice = toTokenUnit(state.amm.underlyingPrice);
  const markPrice = formatUsdValue(rawMarkPrice);
  const indexPrice = formatUsdValue(state.amm.price || 0);
  const rawTotalVolume = toTokenUnit(state.amm.tradingVolume);
  const totalVolume = formatUsdValue(rawTotalVolume);
  const rawFundingRate = toTokenUnit(state.amm.fundingRate);
  const fundingRate = formatPercentage(rawFundingRate, 4);
  const nextFundingMillis = secondsToMilliseconds(state.amm.nextFunding || 0);
  const now = new Date().getTime();
  const countDownMillis = Math.max(nextFundingMillis - now, 0);

  return {
    markPrice,
    indexPrice,
    totalVolume,
    fundingRate,
    countDownMillis,
  };
};
