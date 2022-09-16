import { secondsToMilliseconds } from "date-fns";

import { AppState, CustomStateCreator } from "../../types";
import { Amm } from "@/types/api";
import {
  formatPercentage,
  formatUsdValue,
  toTokenUnit,
} from "@/utils/formatters";

export interface AmmSlice {
  amm: Amm & {
    setAmmInfo: (amm: Amm) => void;
  };
}

export const createAmmSlice: CustomStateCreator<AmmSlice> = (set, _get) => ({
  amm: {
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

    setAmmInfo: (amm: Amm) => {
      set(function setAmmInfo(state: AppState) {
        state.amm = { ...state.amm, ...amm };
      });
    },
  },
});

export const getTopBarValues = (state: AppState) => {
  const rawMarkPrice = toTokenUnit(state.amm.underlyingPrice || 0);
  const markPrice = formatUsdValue(rawMarkPrice);
  const indexPrice = formatUsdValue(state.amm.price || 0);
  const rawTotalVolume = toTokenUnit(state.amm.tradingVolume || 0);
  const totalVolume = formatUsdValue(rawTotalVolume);
  const rawFundingRate = toTokenUnit(state.amm.fundingRate || 0);
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
