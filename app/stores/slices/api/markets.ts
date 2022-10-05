import { MarketId, PairId } from "@/defi";
import { Markets } from "@/types/api";
import { AppState, CustomStateCreator } from "../../types";

interface MarketsProps {
  list: Markets;
  marketId: MarketId;
  pairId: PairId;
  amm: string;
  ready: boolean;
}

export interface MarketsSlice {
  markets: MarketsProps & {
    setMarkets: (markets: Markets) => void;
    changeMarket: (marketId: MarketId) => void;
    changePair: (pairId: PairId) => void;
    getFlattenedPairs: () => { [pair: string]: string };
    getPairName: (amm: string) => PairId | string;
    getAmm: (pair: PairId) => string;
  };
}

export const createMarketsSlice: CustomStateCreator<MarketsSlice> = (
  set,
  get
) => ({
  markets: {
    list: {},
    marketId: MarketId.Crypto,
    pairId: PairId.AVAXUSDC,
    amm: "",
    ready: false,

    setMarkets: (markets: Markets) => {
      set(function setMarkets(state: AppState) {
        state.markets.list = markets;
        state.markets.ready = true;
      });

      set(function setAmm(state: AppState) {
        state.markets.amm = state.markets.getAmm(state.markets.pairId);
      });
    },

    changeMarket: (marketId: MarketId) =>
      set(function changeMarket(state: AppState) {
        state.markets.marketId = marketId;
      }),

    changePair: (pairId: PairId) => {
      const amm = get().markets.getAmm(pairId);

      set(function changePair(state: AppState) {
        state.markets.pairId = pairId;
        state.markets.amm = amm;
      });
    },

    // TODO: This should be done only once when setting the list with BE data
    getFlattenedPairs: () => {
      const markets = Object.entries(get().markets.list);
      return markets.reduce((result, [, pairs]) => {
        const updatedPairs = Object.entries(pairs).reduce(
          (acc, [pair, amm]) => ({
            ...acc,
            [pair]: amm.toLowerCase(),
          }),
          {}
        );

        return { ...result, ...updatedPairs };
      }, {});
    },

    getPairName: (amm: string): PairId | string => {
      const pairs = get().markets.getFlattenedPairs();
      const [pairName] =
        Object.entries(pairs).find(([, currentAmm]) => amm === currentAmm) ||
        [];
      return (pairName as PairId) || "";
    },

    getAmm: (pair: PairId): string => {
      const pairs = get().markets.getFlattenedPairs();
      return pairs[pair] || "";
    },
  },
});
