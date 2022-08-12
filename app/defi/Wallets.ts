import { Wallet, WalletId } from "./types";

export const WALLETS: {
  [walletId in WalletId]: Wallet;
} = {
  [WalletId.metamask]: {
    id: WalletId.metamask,
    name: "Metamask",
    symbol: "Metamask",
    icon: "/wallets/metamask.svg",
  },
};
