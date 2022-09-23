import { getPairs, MarketId } from "@/defi";
import { MARKETS } from "@/defi/Markets";

export const generateMarketDropdownProps = () => {
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

export const generatePairDropdownProps = () => {
  const pairDropdownPropsMapper = (marketId: MarketId) => ({
    searchable: true,
    options: getPairs(marketId).map((pair) => ({
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
