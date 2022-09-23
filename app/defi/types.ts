export enum TokenId {
  btc = "btc",
  usdc = "usdc",
  eth = "eth",
  matic = "matic",
  avax = "avax",
  movr = "movr",
  ftm = "ftm",
  ksm = "ksm",
  dot = "dot",
  pica = "pica",
  chaos = "chaos",
  sol = "solana",
}

export type Token = {
  id: TokenId;
  icon: string;
  symbol: string;
  name: string;
};

export enum CommodityId {
  gold = "gold",
}

export type Commodity = {
  id: CommodityId;
  icon: string;
  symbol: string;
  name: string;
};

export enum IndexId {
  goog = "goog",
  BATCH04 = "BATCH04",
  BATCP04 = "BATCP04",
  CNCAD00 = "CNCAD00",
  ACRCA00 = "ACRCA00",
  "Bitcoin Index" = "SPBTC",
  "Ethereum Index" = "SPETH",
}

export type Index = {
  id: IndexId;
  icon: string;
  symbol: string;
  name: string;
};

export enum NetworkId {
  ethereum = 1,
  arbitrum = 42161,
  polygon = 137,
  avalancheTestnet = 43113,
  avalanche = 43114,
  moonriver = 1285,
  fantom = 250,
}

export type Network = {
  name: string;
  symbol: string;
  rpcUrl: string;
  infoPageUrl: string;
  infoPage: string;
  icon: string;
  defaultTokenSymbol: string;
  publicRpcUrl: string;
  nativeToken: TokenId;
  etherscanLink?: string;
  secondsPerBlock?: number;
};

export enum ProtocolId {
  aave = "aave",
  crv = "crv",
  uni = "uni",
  yfi = "yfi",
}

export type Protocol = {
  id: ProtocolId;
  name: string;
  symbol: string;
  icon: string;
};

export enum MarketId {
  sp500 = "sp500",
  SPPlatts = "S&P Platts",
  SPIndices = "S&P Indices",
  crypto = "crypto",
  commodities = "commodities",
}

export type Market = {
  id: MarketId;
  name: string;
  symbol: string;
  icon: string;
};

export enum WalletId {
  metamask = "metamask",
}

export type Wallet = {
  id: WalletId;
  name: string;
  symbol: string;
  icon: string;
};

export type ProductId =
  | TokenId
  | CommodityId
  | IndexId
  | MarketId
  | NetworkId
  | WalletId
  | ProtocolId;
export type ProductIds = ProductId[];
export type TradedProductId = TokenId | CommodityId | IndexId;
export type Product =
  | Token
  | Commodity
  | Index
  | Market
  | Network
  | Wallet
  | Protocol;

export enum PairId {
  btcusdc = "btcusdc",
  ethusdc = "ethusdc",
  avaxusdc = "avaxusdc",
  ftmusdc = "ftmusdc",
  movrusdc = "movrusdc",
  chaosusdc = "chaosusdc",
  solusdc = "solsusdc",
  BATCH04 = "BATCH04",
  BATCP04 = "BATCP04",
  CNCAD00 = "CNCAD00",
  ACRCA00 = "ACRCA00",
  "Bitcoin Index" = "Bitcoin Index",
  "Ethereum Index" = "Ethereum Index",
  xauusdc = "xausdc",
  googusdc = "googusdc",
}

export type Pair = {
  id: PairId;
  marketId: MarketId;
  productIds: ProductIds;
};
