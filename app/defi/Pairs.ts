import { CommodityId, IndexId, MarketId, Pair, PairId, TokenId } from "./types";

export const PAIRS: { [key in PairId]: Pair } = {
  [PairId.BTCUSDC]: {
    id: PairId.BTCUSDC,
    marketId: MarketId.Crypto,
    productIds: [TokenId.BTC, TokenId.USDC],
  },
  [PairId.ETHUSDC]: {
    id: PairId.ETHUSDC,
    marketId: MarketId.Crypto,
    productIds: [TokenId.ETH, TokenId.USDC],
  },
  [PairId.AVAXUSDC]: {
    id: PairId.AVAXUSDC,
    marketId: MarketId.Crypto,
    productIds: [TokenId.AVAX, TokenId.USDC],
  },
  [PairId.CHAOSUSDC]: {
    id: PairId.CHAOSUSDC,
    marketId: MarketId.Crypto,
    productIds: [TokenId.CHAOS, TokenId.USDC],
  },
  [PairId.FTMUSDC]: {
    id: PairId.FTMUSDC,
    marketId: MarketId.Crypto,
    productIds: [TokenId.FTM, TokenId.USDC],
  },
  [PairId.MOVRUSDC]: {
    id: PairId.MOVRUSDC,
    marketId: MarketId.Crypto,
    productIds: [TokenId.MOVR, TokenId.USDC],
  },
  [PairId.SOLUSDC]: {
    id: PairId.SOLUSDC,
    marketId: MarketId.Crypto,
    productIds: [TokenId.SOL, TokenId.USDC],
  },
  [PairId.BATCH04]: {
    id: PairId.BATCH04,
    marketId: MarketId.SPPlatts,
    productIds: [IndexId.BATCH04, TokenId.USDC],
  },
  [PairId.BATCP04]: {
    id: PairId.BATCP04,
    marketId: MarketId.SPPlatts,
    productIds: [IndexId.BATCP04, TokenId.USDC],
  },
  [PairId.CNCAD00]: {
    id: PairId.CNCAD00,
    marketId: MarketId.SPPlatts,
    productIds: [IndexId.CNCAD00, TokenId.USDC],
  },
  [PairId.ACRCA00]: {
    id: PairId.ACRCA00,
    marketId: MarketId.SPPlatts,
    productIds: [IndexId.ACRCA00, TokenId.USDC],
  },
  [PairId.SPBTC]: {
    id: PairId.SPBTC,
    marketId: MarketId.SPIndices,
    productIds: [IndexId.SPBTC, TokenId.USDC],
  },
  [PairId.SPETH]: {
    id: PairId.SPETH,
    marketId: MarketId.SPIndices,
    productIds: [IndexId.SPETH, TokenId.USDC],
  },
  [PairId.GOOGUSDC]: {
    id: PairId.GOOGUSDC,
    marketId: MarketId.Commodities,
    productIds: [IndexId.GOOG, TokenId.USDC],
  },
  [PairId.XAUUSD]: {
    id: PairId.XAUUSD,
    marketId: MarketId.SP500,
    productIds: [CommodityId.XAU, TokenId.USDC],
  },
};
