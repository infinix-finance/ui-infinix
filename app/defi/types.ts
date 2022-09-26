export enum TokenId {
  BTC = "BTC",
  USDC = "USDC",
  ETH = "ETH",
  MATIC = "MATIC",
  AVAX = "AVAX",
  MOVR = "MOVR",
  FTM = "FTM",
  KSM = "KSM",
  DOT = "DOT",
  PICA = "PICA",
  CHAOS = "CHAOS",
  SOL = "SOL",
}

export type Token = {
  id: TokenId;
  icon: string;
  symbol: string;
  name: string;
};

export enum CommodityId {
  XAU = "XAU",
}

export type Commodity = {
  id: CommodityId;
  icon: string;
  symbol: string;
  name: string;
};

export enum IndexId {
  GOOG = "GOOG",
  BATCH04 = "BATCH04",
  BATCP04 = "BATCP04",
  CNCAD00 = "CNCAD00",
  ACRCA00 = "ACRCA00",
  SPBTC = "SPBTC",
  SPETH = "SPETH",
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
  SP500 = "SP500",
  SPPlatts = "SPPlatts",
  SPIndices = "SPIndices",
  Crypto = "Crypto",
  Commodities = "Commodities",
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
  BTCUSDC = "BTCUSDC",
  ETHUSDC = "ETHUSDC",
  AVAXUSDC = "AVAXUSDC",
  FTMUSDC = "FTMUSDC",
  MOVRUSDC = "MOVRUSDC",
  CHAOSUSDC = "CHAOSUSDC",
  SOLUSDC = "SOLUSDC",
  BATCH04 = "BATCH04",
  BATCP04 = "BATCP04",
  CNCAD00 = "CNCAD00",
  ACRCA00 = "ACRCA00",
  SPBTC = "SPBTC",
  SPETH = "SPETH",
  XAUUSD = "XAUUSD",
  GOOGUSDC = "GOOGUSDC",
}

export type Pair = {
  id: PairId;
  marketId: MarketId;
  productIds: ProductIds;
};
