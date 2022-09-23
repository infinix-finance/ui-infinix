import { PairId } from "@/defi";
import { Markets } from "@/types/api";
import { AppState, CustomStateCreator } from "../../types";

interface MarketsProps {
  list: Markets;
}

export interface MarketsSlice {
  markets: MarketsProps & {
    setMarkets: (markets: Markets) => void;
    getPairName: (amm: string) => PairId;
  };
}

export const createMarketsSlice: CustomStateCreator<MarketsSlice> = (
  set,
  get
) => ({
  markets: {
    list: {},

    setMarkets: (markets: Markets) => {
      set(function setMarkets(state: AppState) {
        state.markets.list = markets;

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
  },
});
