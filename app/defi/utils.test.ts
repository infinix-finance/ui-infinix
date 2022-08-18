import {
  CommodityId,
  IndexId,
  MarketId,
  NetworkId,
  ProtocolId,
  TokenId,
  WalletId,
} from "./types";
import {
  getCommodity,
  getIndex,
  getMarket,
  getNetwork,
  getPairs,
  getProduct,
  getProtocol,
  getToken,
  getWallet,
  isCommodity,
  isIndex,
  isMarket,
  isNetwork,
  isProtocol,
  isSupportedNetwork,
  isToken,
  isWallet,
} from "./utils";

describe("defi utils", () => {
  describe("token related", () => {
    test("should return ethereum token props", () => {
      const expected = {
        id: TokenId.eth,
        icon: "/tokens/eth-mainnet.svg",
        symbol: "ETH",
        name: "Ethereum",
      };
      const token = getToken(TokenId.eth);

      expect(token).toEqual(expected);
    });

    test("should return true for an existing token id", () => {
      const result = isToken(TokenId.eth);

      expect(result).toBe(true);
    });

    test("should return false for a non-token id", () => {
      const result = isToken(MarketId.commodities);

      expect(result).toBe(false);
    });
  });

  describe("commodity related", () => {
    test("should return gold commodity props", () => {
      const expected = {
        id: CommodityId.gold,
        icon: "/commodities/gold.svg",
        symbol: "XAU",
        name: "Gold",
      };
      const commodity = getCommodity(CommodityId.gold);

      expect(commodity).toEqual(expected);
    });

    test("should return true for an existing commodity id", () => {
      const result = isCommodity(CommodityId.gold);

      expect(result).toBe(true);
    });

    test("should return false for a non-commodity id", () => {
      const result = isCommodity(MarketId.commodities);

      expect(result).toBe(false);
    });
  });

  describe("index related", () => {
    test("should return google index props", () => {
      const expected = {
        id: IndexId.goog,
        icon: "/indexes/google.svg",
        symbol: "GOOG",
        name: "Google",
      };
      const index = getIndex(IndexId.goog);

      expect(index).toEqual(expected);
    });

    test("should return true for an existing index id", () => {
      const result = isIndex(IndexId.goog);

      expect(result).toBe(true);
    });

    test("should return false for a non-index id", () => {
      const result = isIndex(MarketId.commodities);

      expect(result).toBe(false);
    });
  });

  describe("network related", () => {
    test("should return avalanche network props", () => {
      const expected = {
        name: "Avalanche",
        symbol: "Avalanche",
        rpcUrl: process.env.RPC_URL_43114!,
        infoPageUrl: "https://cchain.explorer.avax.network/tx/",
        infoPage: "Avax Scan",
        icon: "/networks/avalanche.svg",
        defaultTokenSymbol: "AVAX",
        publicRpcUrl: "https://api.avax.network/ext/bc/C/rpc",
        nativeToken: TokenId.avax,
      };
      const index = getNetwork(NetworkId.avalanche);

      expect(index).toEqual(expected);
    });

    test("should return true for an existing network id", () => {
      const result = isNetwork(NetworkId.avalanche);

      expect(result).toBe(true);
    });

    test("should return false for a non-network id", () => {
      const result = isNetwork(MarketId.commodities);

      expect(result).toBe(false);
    });
  });

  describe("protocol related", () => {
    test("should return aave protocol props", () => {
      const expected = {
        id: ProtocolId.aave,
        name: "AAVE",
        symbol: "AAVE",
        icon: "/protocols/aave.svg",
      };
      const index = getProtocol(ProtocolId.aave);

      expect(index).toEqual(expected);
    });

    test("should return true for an existing protocol id", () => {
      const result = isProtocol(ProtocolId.aave);

      expect(result).toBe(true);
    });

    test("should return false for a non-network id", () => {
      const result = isProtocol(MarketId.commodities);

      expect(result).toBe(false);
    });
  });

  describe("market related", () => {
    test("should return crypto market props", () => {
      const expected = {
        id: MarketId.crypto,
        name: "Crypto",
        symbol: "Crypto",
        icon: "/markets/crypto.svg",
      };
      const index = getMarket(MarketId.crypto);

      expect(index).toEqual(expected);
    });

    test("should return true for an existing market id", () => {
      const result = isMarket(MarketId.crypto);

      expect(result).toBe(true);
    });

    test("should return false for a non-market id", () => {
      const result = isMarket(TokenId.avax);

      expect(result).toBe(false);
    });
  });

  describe("wallet related", () => {
    test("should return metamask wallet props", () => {
      const expected = {
        id: WalletId.metamask,
        name: "Metamask",
        symbol: "Metamask",
        icon: "/wallets/metamask.svg",
      };
      const index = getWallet(WalletId.metamask);

      expect(index).toEqual(expected);
    });

    test("should return true for an existing wallet id", () => {
      const result = isWallet(WalletId.metamask);

      expect(result).toBe(true);
    });

    test("should return false for a non-wallet id", () => {
      const result = isWallet(TokenId.avax);

      expect(result).toBe(false);
    });
  });

  describe("product(all the above combined) related", () => {
    test("should return ethereum token props", () => {
      const expected = {
        id: TokenId.eth,
        icon: "/tokens/eth-mainnet.svg",
        symbol: "ETH",
        name: "Ethereum",
      };
      const index = getProduct(TokenId.eth);

      expect(index).toEqual(expected);
    });

    test("should return aave protocol props", () => {
      const expected = {
        id: ProtocolId.aave,
        name: "AAVE",
        symbol: "AAVE",
        icon: "/protocols/aave.svg",
      };
      const index = getProduct(ProtocolId.aave);

      expect(index).toEqual(expected);
    });
  });

  describe("isSupportedNetwork", () => {
    test("should return that avalanche testnet is supported", () => {
      const supported = isSupportedNetwork(NetworkId.avalancheTestnet);

      expect(supported).toBe(true);
    });

    test("should return that ethereum is not supported", () => {
      const supported = isSupportedNetwork(NetworkId.ethereum);

      expect(supported).toBe(false);
    });
  });

  describe("getPairs", () => {
    test("should return all pairs regardless of it's market category ", () => {
      const pairs = getPairs();

      expect(pairs.length).toBe(8);
    });

    test("should return crypto pairs", () => {
      const pairs = getPairs(MarketId.crypto);

      expect(pairs.length).toBe(6);
    });

    test("should return commodity pairs", () => {
      const pairs = getPairs(MarketId.commodities);

      expect(pairs.length).toBe(1);
    });

    test("should return index pairs", () => {
      const pairs = getPairs(MarketId.sp500);

      expect(pairs.length).toBe(1);
    });
  });
});
