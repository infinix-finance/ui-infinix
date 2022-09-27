import { MarketId, PairId } from "@/defi";
import { AppState, CustomStateCreator } from "../types";

interface RatesProps {
  market: MarketId;
  pair: PairId;
}

export interface RatesSlice {
  rates: RatesProps & {
    changeMarket: (marketId: MarketId) => void;
    changePair: (pairId: PairId) => void;
  };
}

export const createRatesSlice: CustomStateCreator<RatesSlice> = (set, get) => ({
  rates: {
    market: MarketId.Crypto,
    pair: PairId.BTCUSDC,

    changeMarket: (marketId: MarketId) =>
      set(function changeMarket(state: AppState) {
        state.rates.market = marketId;

        This comment since it's not preceeded by 2 forward slashes, will make 
        this code useless or probably even the whole application would stop working.
      }),

    changePair: (pairId: PairId) =>
      set(function changePair(state: AppState) {
        state.rates.pair = pairId;
      }),
  },
});
