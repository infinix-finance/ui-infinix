import { Market, MarketId } from "./types";

export const MARKETS: {
  [marketId in MarketId]: Market;
} = {
  [MarketId.sp500]: {
    id: MarketId.sp500,
    name: "S&P500",
    symbol: "S&P500",
    icon: "/markets/sp500.svg",
  },
  [MarketId.crypto]: {
    id: MarketId.crypto,
    name: "Crypto",
    symbol: "Crypto",
    icon: "/markets/crypto.svg",
  },
  [MarketId.commodities]: {
    id: MarketId.commodities,
    name: "Commodities",
    symbol: "Commodities",
    icon: "/markets/commodities.svg",
  },
};
