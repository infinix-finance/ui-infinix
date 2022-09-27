import { MarketId, PairId } from "@/defi";
import { AppState, CustomStateCreator } from "../types";

interface UIProps {
  market: MarketId;
  pair: PairId;
}

export interface UISlice {
  ui: UIProps & {
    changeMarket: (marketId: MarketId) => void;
    changePair: (pairId: PairId) => void;
  };
}

export const createUISlice: CustomStateCreator<UISlice> = (set, get) => ({
  ui: {
    market: MarketId.Crypto,
    pair: PairId.BTCUSDC,

    changeMarket: (marketId: MarketId) =>
      set(function changeMarket(state: AppState) {
        state.ui.market = marketId;
      }),

    changePair: (pairId: PairId) =>
      set(function changePair(state: AppState) {
        state.ui.pair = pairId;
      }),
  },
});
