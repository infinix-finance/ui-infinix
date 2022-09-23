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
  [key in MarketId]: {
    searchable: boolean;
    options: {
      value: PairId;
      productIds: ProductIds;
    }[];
  };
};

export const generateMarketDropdownProps = (): MarketDropdownConfig => {
  const options = Object.values(MARKETS)
    .filter(
      (market) => ![MarketId.commodities, MarketId.sp500].includes(market.id)
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

export const generatePairDropdownProps = (): PairDropdownConfig => {
  const pairList = useStore.getState().markets.getFlattenedPairs();
  const pairDropdownPropsMapper = (marketId: MarketId) => ({
    searchable: true,
    options: getPairs(marketId)
      .filter((pair) => {
        return !!pairList[pair.id] || !!pairList[pair.id.toUpperCase()];
      })
      .map((pair) => ({
        value: pair.id,
        productIds: pair.productIds,
      })),
  });

  return {
    [MarketId.crypto]: pairDropdownPropsMapper(MarketId.crypto),
    [MarketId.SPPlatts]: pairDropdownPropsMapper(MarketId.SPPlatts),
    [MarketId.SPIndices]: pairDropdownPropsMapper(MarketId.SPIndices),
    [MarketId.sp500]: pairDropdownPropsMapper(MarketId.sp500),
    [MarketId.commodities]: pairDropdownPropsMapper(MarketId.commodities),
  };
};
