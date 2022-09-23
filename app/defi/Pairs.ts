import { CommodityId, IndexId, MarketId, Pair, PairId, TokenId } from "./types";

export const PAIRS: { [key in PairId]: Pair } = {
  [PairId.btcusdc]: {
    id: PairId.btcusdc,
    marketId: MarketId.crypto,
    productIds: [TokenId.btc, TokenId.usdc],
  },
  [PairId.ethusdc]: {
    id: PairId.ethusdc,
    marketId: MarketId.crypto,
    productIds: [TokenId.eth, TokenId.usdc],
  },
  [PairId.avaxusdc]: {
    id: PairId.avaxusdc,
    marketId: MarketId.crypto,
    productIds: [TokenId.avax, TokenId.usdc],
  },
  [PairId.chaosusdc]: {
    id: PairId.chaosusdc,
    marketId: MarketId.crypto,
    productIds: [TokenId.chaos, TokenId.usdc],
  },
  [PairId.ftmusdc]: {
    id: PairId.ftmusdc,
    marketId: MarketId.crypto,
    productIds: [TokenId.ftm, TokenId.usdc],
  },
  [PairId.movrusdc]: {
    id: PairId.movrusdc,
    marketId: MarketId.crypto,
    productIds: [TokenId.movr, TokenId.usdc],
  },
  [PairId.solusdc]: {
    id: PairId.solusdc,
    marketId: MarketId.crypto,
    productIds: [TokenId.sol, TokenId.usdc],
  },
  [PairId.BATCH04]: {
    id: PairId.BATCH04,
    marketId: MarketId.SPPlatts,
    productIds: [IndexId.BATCH04, TokenId.usdc],
  },
  [PairId.BATCP04]: {
    id: PairId.BATCP04,
    marketId: MarketId.SPPlatts,
    productIds: [IndexId.BATCP04, TokenId.usdc],
  },
  [PairId.CNCAD00]: {
    id: PairId.CNCAD00,
    marketId: MarketId.SPPlatts,
    productIds: [IndexId.CNCAD00, TokenId.usdc],
  },
  [PairId.ACRCA00]: {
    id: PairId.ACRCA00,
    marketId: MarketId.SPPlatts,
    productIds: [IndexId.ACRCA00, TokenId.usdc],
  },
  [PairId["Bitcoin Index"]]: {
    id: PairId["Bitcoin Index"],
    marketId: MarketId.SPIndices,
    productIds: [IndexId["Bitcoin Index"], TokenId.usdc],
  },
  [PairId["Ethereum Index"]]: {
    id: PairId["Ethereum Index"],
    marketId: MarketId.SPIndices,
    productIds: [IndexId["Ethereum Index"], TokenId.usdc],
  },
  [PairId.googusdc]: {
    id: PairId.googusdc,
    marketId: MarketId.commodities,
    productIds: [IndexId.goog, TokenId.usdc],
  },
  [PairId.xauusdc]: {
    id: PairId.xauusdc,
    marketId: MarketId.sp500,
    productIds: [CommodityId.gold, TokenId.usdc],
  },
};
