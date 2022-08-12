import { MARKETS } from "./Markets";
import { NETWORKS } from "./Networks";
import { PROTOCOLS } from "./Protocols";
import { TOKENS } from "./Tokens";
import {
  Market,
  MarketId,
  Network,
  NetworkId,
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

export const isToken = (value: any) => Object.values(TokenId).includes(value);

export const getNetwork = (networkId: NetworkId): Network =>
  NETWORKS[networkId];

export const isNetwork = (value: any) =>
  Object.values(NetworkId).includes(value);

export const getProtocol = (protocolId: ProtocolId): Protocol =>
  PROTOCOLS[protocolId];

export const isProtocol = (value: any) =>
  Object.values(ProtocolId).includes(value);

export const getMarket = (marketId: MarketId): Market => MARKETS[marketId];

export const isMarket = (value: any): boolean =>
  Object.values(MarketId).includes(value);

export const getWallet = (walletId: keyof typeof WalletId): Wallet =>
  WALLETS[walletId];

export const isWallet = (value: any) => Object.values(WalletId).includes(value);

export const getProduct = (value: ProductId): Product => {
  return (
    (isToken(value) && getToken(value as TokenId)) ||
    (isMarket(value) && getMarket(value as MarketId)) ||
    (isNetwork(value) && getNetwork(value as NetworkId)) ||
    getWallet(value as WalletId)
  );
};
