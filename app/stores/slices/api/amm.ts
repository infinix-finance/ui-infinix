import { secondsToMilliseconds } from "date-fns";

import { Amm } from "@/types/api";
import {
  formatPercentage,
  formatUsdValue,
  toTokenUnit,
} from "@/utils/formatters";
import { AppState, CustomStateCreator } from "../../types";
import { handleError } from "../slices.utils";

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
  baseAssetReserve: "",
  quoteAssetReserve: "",
});

export interface AmmSlice {
  amm: Amm & {
    setAmmInfo: (amm: Amm) => void;
    clear: () => void;
  };
}

export const createAmmSlice: CustomStateCreator<AmmSlice> = (set, get) => ({
  amm: {
    ...getDefaultData(),

    setAmmInfo: (amm: Amm) => {
      if (handleError(get(), amm)) {
        return;
      }

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
  const indexPrice = formatUsdValue(state.amm.price || 0);
  const rawTotalVolume = toTokenUnit(state.amm.tradingVolume);
  const totalVolume = formatUsdValue(rawTotalVolume);
  const rawFundingRate = toTokenUnit(state.amm.fundingRate);
  const fundingRate = formatPercentage(rawFundingRate, 4);
  const nextFundingMillis = secondsToMilliseconds(state.amm.nextFunding || 0);
  const now = new Date().getTime();
  const countDownMillis = Math.max(nextFundingMillis - now, 0);

  return {
    indexPrice,
    totalVolume,
    fundingRate,
    countDownMillis,
  };
};

export const isIndexPriceValid = (state: AppState) => {
  return !!state.amm.price;
};

export const isMarkPriceValid = (state: AppState) => {
  const markPrice = toTokenUnit(state.amm.underlyingPrice);
  return markPrice.gt(0);
};

export const isAmmInfoValid = ({ amm: { id, dataFeedId } }: AppState) => {
  return (!id && !dataFeedId) || (!!id && !!dataFeedId);
};
