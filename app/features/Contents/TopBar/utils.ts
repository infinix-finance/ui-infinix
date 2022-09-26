import { getPairs, MarketId, PairId, ProductId, ProductIds } from "@/defi";
import { MARKETS } from "@/defi/Markets";
import { useStore } from "@/stores/root";

export type MarketDropdownConfig = {
  searchable: boolean;
  options: {
    value: ProductId;
    productIds: ProductIds;
  }[];
};

export type PairDropdownConfig = {
  searchable: boolean;
  options: {
    value: PairId;
    productIds: ProductIds;
  }[];
};

export const generateMarketDropdownProps = (): MarketDropdownConfig => {
  const options = Object.values(MARKETS)
    .filter(
      (market) => ![MarketId.Commodities, MarketId.SP500].includes(market.id)
    )
    .map((market) => ({
      value: market.id,
      productIds: [market.id],
    }));

  return {
    searchable: true,
    options,
  };
};

export const generatePairDropdownProps = (
  marketId: MarketId
): PairDropdownConfig => {
  const pairList = useStore.getState().markets.getFlattenedPairs();
  const options = getPairs(marketId)
    .filter((pair) => !!pairList[pair.id])
    .map((pair) => ({
      value: pair.id,
      productIds: pair.productIds,
    }));

  return {
    searchable: true,
    options,
  };
};
