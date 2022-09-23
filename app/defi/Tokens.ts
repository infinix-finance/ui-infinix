import { Token, TokenId } from "./types";

export const TOKENS: { [key in TokenId]: Token } = {
  [TokenId.btc]: {
    id: TokenId.btc,
    icon: "/tokens/bitcoin.svg",
    symbol: "BTC",
    name: "Bitcoin",
  },
  [TokenId.usdc]: {
    id: TokenId.usdc,
    icon: "/tokens/usd-coin-usdc.svg",
    symbol: "USDC",
    name: "USDC",
  },
  [TokenId.eth]: {
    id: TokenId.eth,
    icon: "/tokens/eth-mainnet.svg",
    symbol: "ETH",
    name: "Ethereum",
  },
  [TokenId.matic]: {
    id: TokenId.matic,
    icon: "/tokens/polygon-matic.svg",
    symbol: "MATIC",
    name: "Matic",
  },
  [TokenId.avax]: {
    id: TokenId.avax,
    icon: "/tokens/avalanche.svg",
    symbol: "AVAX",
    name: "Avalanche",
  },
  [TokenId.ftm]: {
    id: TokenId.ftm,
    icon: "/tokens/fantom.svg",
    symbol: "FTM",
    name: "Fantom",
  },
  [TokenId.movr]: {
    id: TokenId.movr,
    icon: "/tokens/movr.svg",
    symbol: "MOVR",
    name: "Moonriver",
  },
  [TokenId.dot]: {
    id: TokenId.dot,
    icon: "/tokens/polkadot.svg",
    symbol: "DOT",
    name: "Pokadot",
  },
  [TokenId.pica]: {
    id: TokenId.pica,
    icon: "/tokens/picasso.svg",
    symbol: "PICA",
    name: "Picasso",
  },
  [TokenId.ksm]: {
    id: TokenId.ksm,
    icon: "/tokens/dotsama-kusama.svg",
    symbol: "KSM",
    name: "Kusama",
  },
  [TokenId.chaos]: {
    id: TokenId.chaos,
    icon: "/tokens/chaos.svg",
    symbol: "CHAOS",
    name: "Chaos",
  },
  [TokenId.sol]: {
    id: TokenId.sol,
    icon: "/tokens/solana.svg",
    symbol: "SOL",
    name: "Solana",
  },
};
