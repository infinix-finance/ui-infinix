import { Index, IndexId } from "./types";

export const INDEXES: { [key in IndexId]: Index } = {
  [IndexId.GOOG]: {
    id: IndexId.GOOG,
    icon: "/indexes/google.svg",
    symbol: "GOOG",
    name: "Google",
  },
  [IndexId.ACRCA00]: {
    id: IndexId.ACRCA00,
    icon: "/indexes/sp500.svg", // TODO
    symbol: "ACRCA00",
    name: "ACRCA00",
  },
  [IndexId.BATCH04]: {
    id: IndexId.BATCH04,
    icon: "/indexes/sp500.svg", // TODO
    symbol: "BATCH04",
    name: "BATCH04",
  },
  [IndexId.BATCP04]: {
    id: IndexId.BATCP04,
    icon: "/indexes/sp500.svg", // TODO
    symbol: "BATCP04",
    name: "BATCP04",
  },
  [IndexId.CNCAD00]: {
    id: IndexId.CNCAD00,
    icon: "/indexes/sp500.svg", // TODO
    symbol: "CNCAD00",
    name: "CNCAD00",
  },
  [IndexId.SPBTC]: {
    id: IndexId.SPBTC,
    icon: "/indexes/bitcoin.svg", // TODO
    symbol: "SPBTC",
    name: "Bitcoin Index",
  },
  [IndexId.SPETH]: {
    id: IndexId.SPETH,
    icon: "/indexes/eth-mainnet.svg", // TODO
    symbol: "SPETH",
    name: "Ethereum Index",
  },
};
