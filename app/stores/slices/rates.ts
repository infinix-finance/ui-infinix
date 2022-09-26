import BigNumber from "bignumber.js";

import { MarketId, PairId } from "@/defi";
import { AppState, CustomStateCreator } from "../types";

interface RatesProps {
  market: MarketId;
  pair: PairId;
  exchangeRate: BigNumber | number;
  percentageChange: number;
  percentageValue: string;
  markPrice: string;
  indexPrice: string;
  funding: string;
  volumeValue: string;
  startMillis: number;
}

export interface RatesSlice {
  rates: RatesProps & {
    fetchDetails: () => void;
    changeMarket: (marketId: MarketId) => void;
    changePair: (pairId: PairId) => void;
  };
}

export const createRatesSlice: CustomStateCreator<RatesSlice> = (set, get) => ({
  rates: {
    market: MarketId.Crypto,
    pair: PairId.BTCUSDC,
    exchangeRate: new BigNumber(0),
    percentageChange: 0,
    percentageValue: "$0.00",
    markPrice: "$0.00",
    indexPrice: "$0.00",
    funding: "0.00%",
    volumeValue: "$0.00",
    startMillis: 0,

    fetchDetails: () =>
      set(function fetchDetails(state: AppState) {
        state.rates = {
          ...state.rates,
          percentageChange: 21.3456,
          percentageValue: "$210.00",
          markPrice: "$1.50",
          indexPrice: "$2.40",
          funding: "0.0121%",
          volumeValue: "$234.56",
          startMillis: 2000000,
        };
      }),

    changeMarket: (marketId: MarketId) =>
      set(function changeMarket(state: AppState) {
        state.rates.market = marketId;
      }),

    changePair: (pairId: PairId) =>
      set(function changePair(state: AppState) {
        state.rates.pair = pairId;
      }),
  },
});

export const getExchangeRate = (state: AppState): BigNumber =>
  state.rates.exchangeRate as BigNumber;
