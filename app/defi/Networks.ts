import { Network, NetworkId, TokenId } from "./types";

export const NETWORKS: {
  [networkId in NetworkId]: Network;
} = {
  1: {
    name: "Ethereum",
    symbol: "Ethereum",
    rpcUrl: process.env.RPC_URL_1!,
    infoPageUrl: "https://etherscan.io/tx/",
    infoPage: "Etherscan",
    icon: "/networks/mainnet.svg",
    defaultTokenSymbol: "ETH",
    publicRpcUrl: "",
    nativeToken: TokenId.eth,
  },
  42161: {
    name: "Arbitrum",
    symbol: "Arbitrum",
    rpcUrl: process.env.RPC_URL_42161!,
    infoPageUrl: "https://arbiscan.io/tx/",
    infoPage: "Arbiscan",
    icon: "/networks/mainnet.svg",
    defaultTokenSymbol: "ETH",
    publicRpcUrl: "https://arb1.arbitrum.io/rpc",
    nativeToken: TokenId.eth,
  },
};
