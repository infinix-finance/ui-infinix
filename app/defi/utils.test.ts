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
        id: TokenId.ETH,
        icon: "/tokens/eth-mainnet.svg",
        symbol: "ETH",
        name: "Ethereum",
      };
      const token = getToken(TokenId.ETH);

      expect(token).toEqual(expected);
    });

    test("should return true for an existing token id", () => {
      const result = isToken(TokenId.ETH);

      expect(result).toBe(true);
    });

    test("should return false for a non-token id", () => {
      const result = isToken(MarketId.Commodities);

      expect(result).toBe(false);
    });
  });

  describe("commodity related", () => {
    test("should return gold commodity props", () => {
      const expected = {
        id: CommodityId.XAU,
        icon: "/commodities/gold.svg",
        symbol: "XAU",
        name: "Gold",
      };
      const commodity = getCommodity(CommodityId.XAU);

      expect(commodity).toEqual(expected);
    });

    test("should return true for an existing commodity id", () => {
      const result = isCommodity(CommodityId.XAU);

      expect(result).toBe(true);
    });

    test("should return false for a non-commodity id", () => {
      const result = isCommodity(MarketId.Commodities);

      expect(result).toBe(false);
    });
  });

  describe("index related", () => {
    test("should return google index props", () => {
      const expected = {
        id: IndexId.GOOG,
        icon: "/indexes/google.svg",
        symbol: "GOOG",
        name: "Google",
      };
      const index = getIndex(IndexId.GOOG);

      expect(index).toEqual(expected);
    });

    test("should return true for an existing index id", () => {
      const result = isIndex(IndexId.GOOG);

      expect(result).toBe(true);
    });

    test("should return false for a non-index id", () => {
      const result = isIndex(MarketId.Commodities);

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
        nativeToken: TokenId.AVAX,
      };
      const index = getNetwork(NetworkId.avalanche);

      expect(index).toEqual(expected);
    });

    test("should return true for an existing network id", () => {
      const result = isNetwork(NetworkId.avalanche);

      expect(result).toBe(true);
    });

    test("should return false for a non-network id", () => {
      const result = isNetwork(MarketId.Commodities);

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
      const result = isProtocol(MarketId.Commodities);

      expect(result).toBe(false);
    });
  });

  describe("market related", () => {
    test("should return crypto market props", () => {
      const expected = {
        id: MarketId.Crypto,
        name: "Crypto",
        symbol: "Crypto",
        icon: "/markets/crypto.svg",
      };
      const index = getMarket(MarketId.Crypto);

      expect(index).toEqual(expected);
    });

    test("should return true for an existing market id", () => {
      const result = isMarket(MarketId.Crypto);

      expect(result).toBe(true);
    });

    test("should return false for a non-market id", () => {
      const result = isMarket(TokenId.AVAX);

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
      const result = isWallet(TokenId.AVAX);

      expect(result).toBe(false);
    });
  });

  describe("product(all the above combined) related", () => {
    test("should return ethereum token props", () => {
      const expected = {
        id: TokenId.ETH,
        icon: "/tokens/eth-mainnet.svg",
        symbol: "ETH",
        name: "Ethereum",
      };
      const index = getProduct(TokenId.ETH);

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
    test("should return all pairs regardless of it's market category", () => {
      const pairs = getPairs();

      expect(pairs.length).toBe(15);
    });

    test("should return crypto pairs", () => {
      const pairs = getPairs(MarketId.Crypto);

      expect(pairs.length).toBe(7);
    });

    test("should return commodity pairs", () => {
      const pairs = getPairs(MarketId.Commodities);

      expect(pairs.length).toBe(1);
    });

    test("should return index pairs", () => {
      const pairs = getPairs(MarketId.SP500);

      expect(pairs.length).toBe(1);
    });
  });
});
