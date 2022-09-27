import { Token, TokenId } from "./types";

export const TOKENS: { [key in TokenId]: Token } = {
  [TokenId.BTC]: {
    id: TokenId.BTC,
    icon: "/tokens/bitcoin.svg",
    symbol: "BTC",
    name: "Bitcoin",
  },
  [TokenId.USDC]: {
    id: TokenId.USDC,
    icon: "/tokens/usd-coin-usdc.svg",
    symbol: "USDC",
    name: "USDC",
  },
  [TokenId.ETH]: {
    id: TokenId.ETH,
    icon: "/tokens/eth-mainnet.svg",
    symbol: "ETH",
    name: "Ethereum",
  },
  [TokenId.MATIC]: {
    id: TokenId.MATIC,
    icon: "/tokens/polygon-matic.svg",
    symbol: "MATIC",
    name: "Matic",
  },
  [TokenId.AVAX]: {
    id: TokenId.AVAX,
    icon: "/tokens/avalanche.svg",
    symbol: "AVAX",
    name: "Avalanche",
  },
  [TokenId.FTM]: {
    id: TokenId.FTM,
    icon: "/tokens/fantom.svg",
    symbol: "FTM",
    name: "Fantom",
  },
  [TokenId.MOVR]: {
    id: TokenId.MOVR,
    icon: "/tokens/movr.svg",
    symbol: "MOVR",
    name: "Moonriver",
  },
  [TokenId.DOT]: {
    id: TokenId.DOT,
    icon: "/tokens/polkadot.svg",
    symbol: "DOT",
    name: "Pokadot",
  },
  [TokenId.PICA]: {
    id: TokenId.PICA,
    icon: "/tokens/picasso.svg",
    symbol: "PICA",
    name: "Picasso",
  },
  [TokenId.KSM]: {
    id: TokenId.KSM,
    icon: "/tokens/dotsama-kusama.svg",
    symbol: "KSM",
    name: "Kusama",
  },
  [TokenId.CHAOS]: {
    id: TokenId.CHAOS,
    icon: "/tokens/chaos.svg",
    symbol: "CHAOS",
    name: "Chaos",
  },
  [TokenId.SOL]: {
    id: TokenId.SOL,
    icon: "/tokens/solana.svg",
    symbol: "SOL",
    name: "Solana",
  },
};
