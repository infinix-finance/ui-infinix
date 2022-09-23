import { PairId } from "@/defi";
import { Markets } from "@/types/api";
import { AppState, CustomStateCreator } from "../../types";

interface MarketsProps {
  list: Markets;
  ready: boolean;
}

export interface MarketsSlice {
  markets: MarketsProps & {
    setMarkets: (markets: Markets) => void;
    getPairName: (amm: string) => PairId;
    getFlattenedPairs: () => { [pair: string]: string };
  };
}

export const createMarketsSlice: CustomStateCreator<MarketsSlice> = (
  set,
  get
) => ({
  markets: {
    list: {},
    ready: false,

    setMarkets: (markets: Markets) => {
      set(function setMarkets(state: AppState) {
        state.markets.list = markets;
        state.markets.ready = true;

        // TODO: Remove when markets data provides amm address as well
        state.markets.list.Amberdata.AVAXUSDC =
          "0xe5639cbb02ec3bd65c77e128b0c7350aeefb2bd1";
      });
    },

    getPairName: (amm: string): PairId => {
      const markets = Object.entries(get().markets.list);
      const pairName = markets.reduce((result, [, pairs]) => {
        return (
          result ||
          Object.entries(pairs).reduce((foundPair, [pair, currAmm]) => {
            return currAmm === amm ? pair : foundPair;
          }, "")
        );
      }, "");

      return pairName.toLowerCase() as PairId;
    },

    getFlattenedPairs: () => {
      const markets = Object.entries(get().markets.list);
      return markets.reduce((result, [, pairs]) => {
        return { ...result, ...pairs };
      }, {});
    },
  },
});
