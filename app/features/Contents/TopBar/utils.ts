import { getPairs, MarketId } from "@/defi";
import { MARKETS } from "@/defi/Markets";

export const generateMarketDropdownProps = () => {
  const options = Object.values(MARKETS).map((market) => ({
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
    [MarketId.commodities]: pairDropdownPropsMapper(MarketId.commodities),
    [MarketId.crypto]: pairDropdownPropsMapper(MarketId.crypto),
    [MarketId.sp500]: pairDropdownPropsMapper(MarketId.sp500),
  };
};
