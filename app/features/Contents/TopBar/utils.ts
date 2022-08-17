import { getPairs, MarketId, PairId, ProductIds } from "@/defi";
import { MARKETS } from "@/defi/Markets";

export interface MarketDropdownProps {
  searchable: boolean;
  options: {
    value: MarketId;
    productIds: MarketId[];
  }[];
}

export interface PairDropdownProps {
  searchable: boolean;
  options: {
    value: PairId;
    productIds: ProductIds;
  }[];
}

export const generateMarketDropdownProps = (): MarketDropdownProps => {
  const options = Object.values(MARKETS).map((market) => ({
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
): PairDropdownProps => {
  const options = getPairs(marketId).map((pair) => ({
    value: pair.id,
    productIds: pair.productIds,
  }));

  return {
    searchable: true,
    options,
  };
};
