import { IndexId, Index } from "./types";

export const INDEXES: { [key in IndexId]: Index } = {
  [IndexId.goog]: {
    id: IndexId.goog,
    icon: "/indexes/google.svg",
    symbol: "GOOG",
    name: "Google",
  },
};
