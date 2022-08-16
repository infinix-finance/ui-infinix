export enum TokenId {
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
}

export type Token = {
  id: TokenId;
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

export type ProductId = TokenId | MarketId | NetworkId | WalletId;
export type Product = Token | Market | Network | Wallet;
