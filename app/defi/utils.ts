import { MARKETS } from "./Markets";
import { NETWORKS } from "./Networks";
import { PROTOCOLS } from "./Protocols";
import { TOKENS } from "./Tokens";
import {
  Market,
  MarketId,
  Network,
  NetworkId,
  Protocol,
  ProtocolId,
  Token,
  TokenId,
} from "./types";

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
