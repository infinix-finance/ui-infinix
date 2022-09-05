import { COMMODITIES } from "./Commodities";
import { INDEXES } from "./Indexes";
import { MARKETS } from "./Markets";
import { NETWORKS } from "./Networks";
import { PAIRS } from "./Pairs";
import { PROTOCOLS } from "./Protocols";
import { TOKENS } from "./Tokens";
import {
  Commodity,
  CommodityId,
  Index,
  IndexId,
  Market,
  MarketId,
  Network,
  NetworkId,
  Pair,
  PairId,
  Product,
  ProductId,
  Protocol,
  ProtocolId,
  Token,
  TokenId,
  Wallet,
  WalletId,
} from "./types";
import { WALLETS } from "./Wallets";

export const getToken = (tokenId: keyof typeof TokenId): Token =>
  TOKENS[tokenId];

export const isToken = (value: ProductId) =>
  Object.values(TokenId).some((val) => val === value);

export const getCommodity = (
  commodityId: keyof typeof CommodityId
): Commodity => COMMODITIES[commodityId];

export const isCommodity = (value: ProductId) =>
  Object.values(CommodityId).some((val) => val === value);

export const getIndex = (indexId: keyof typeof IndexId): Index =>
  INDEXES[indexId];

export const isIndex = (value: ProductId) =>
  Object.values(IndexId).some((val) => val === value);

export const getNetwork = (networkId: NetworkId): Network =>
  NETWORKS[networkId];

export const isNetwork = (value: ProductId) =>
  Object.values(NetworkId).some((val) => val === value);

export const getProtocol = (protocolId: ProtocolId): Protocol =>
  PROTOCOLS[protocolId];

export const isProtocol = (value: ProductId) =>
  Object.values(ProtocolId).some((val) => val === value);

export const getMarket = (marketId: MarketId): Market => MARKETS[marketId];

export const isMarket = (value: ProductId): boolean =>
  Object.values(MarketId).some((val) => val === value);

export const getWallet = (walletId: keyof typeof WalletId): Wallet =>
  WALLETS[walletId];

export const isWallet = (value: ProductId) =>
  Object.values(WalletId).some((val) => val === value);

export const getPair = (pairId: PairId): Pair => PAIRS[pairId];

export const getProduct = (value: ProductId): Product => {
  return (
    (isToken(value) && getToken(value as TokenId)) ||
    (isCommodity(value) && getCommodity(value as CommodityId)) ||
    (isIndex(value) && getIndex(value as IndexId)) ||
    (isMarket(value) && getMarket(value as MarketId)) ||
    (isNetwork(value) && getNetwork(value as NetworkId)) ||
    (isProtocol(value) && getProtocol(value as ProtocolId)) ||
    getWallet(value as WalletId)
  );
};

export const isSupportedNetwork = (networkId?: NetworkId | null) => {
  return [NetworkId.avalanche, NetworkId.avalancheTestnet].some(
    (id) => id === networkId
  );
};

export const getPairs = (marketId?: MarketId) => {
  return !marketId
    ? Object.values(PAIRS)
    : Object.values(PAIRS).filter((values) => {
        return values.marketId === marketId;
      });
};
