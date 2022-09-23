import { Market, MarketId } from "./types";

export const MARKETS: {
  [marketId in MarketId]: Market;
} = {
  [MarketId.crypto]: {
    id: MarketId.crypto,
    name: "Crypto",
    symbol: "Crypto",
    icon: "/markets/crypto.svg",
  },
  [MarketId.sp500]: {
    id: MarketId.sp500,
    name: "S&P500",
    symbol: "S&P500",
    icon: "/markets/sp500.svg",
  },
  [MarketId.SPPlatts]: {
    id: MarketId.SPPlatts,
    name: "S&P Platts",
    symbol: "S&P Platts",
    icon: "/markets/sp500.svg",
  },
  [MarketId.SPIndices]: {
    id: MarketId.SPIndices,
    name: "S&P Indices",
    symbol: "S&P Indices",
    icon: "/markets/sp500.svg",
  },
  [MarketId.commodities]: {
    id: MarketId.commodities,
    name: "Commodities",
    symbol: "Commodities",
    icon: "/markets/commodities.svg",
  },
};
