import BigNumber from "bignumber.js";

import { PairId, TokenId } from "@/defi";
import {
  capitalize,
  formatNumber,
  formatPair,
  shortenAddress,
  toFixedNumber,
} from "@/utils/formatters";

describe("formatters", () => {
  describe("shortenAddress", () => {
    it("should return an empty string for an invalid address", () => {
      const result = shortenAddress(null);
      expect(result).toBe("");
    });

    it("should format the given address", () => {
      const result = shortenAddress(
        "0x09f0F5035f9633c58b3493D4C4334291E643B262"
      );
      expect(result).toBe("0x09f...262");
    });
  });

  describe("formatNumber", () => {
    it("should return the number only", () => {
      const result = formatNumber(new BigNumber(320));

      expect(result).toBe("320.00");
    });

    it("should add thousand separators above 1K by default", () => {
      const result = formatNumber(new BigNumber(1129320));

      expect(result).toBe("1,129,320.00");
    });

    it("should not add thousand separators above 1K if set explicitly", () => {
      const result = formatNumber(new BigNumber(1129320), {
        withThousandSeparator: false,
      });

      expect(result).toBe("1129320.00");
    });

    it("should return the number with prefix", () => {
      const result = formatNumber(new BigNumber(320), { prefix: "$" });

      expect(result).toBe("$320.00");
    });

    it("should return the number with token symbol", () => {
      const result = formatNumber(new BigNumber(320), {
        productId: TokenId.usdc,
      });

      expect(result).toBe("320.00 USDC");
    });

    it("should return the number with everything customized", () => {
      const result = formatNumber(new BigNumber(320), {
        base: 4,
        prefix: "$",
        productId: TokenId.usdc,
      });

      expect(result).toBe("$320.0000 USDC");
    });

    it("should show positive sign prefix", () => {
      const result = formatNumber(new BigNumber(2), {
        showSign: true,
      });

      expect(result).toBe("+2.00");
    });

    it("should show negative sign prefix", () => {
      const result = formatNumber(new BigNumber(-2), {
        showSign: true,
      });

      expect(result).toBe("-2.00");
    });
  });

  describe("toFixedAmount", () => {
    it("should return number rounded to 2 digits by default", () => {
      const result = toFixedNumber(new BigNumber(1129320.123456));

      expect(result).toBe("1129320.12");
    });

    it("should return number rounded to 4 digits by default", () => {
      const result = toFixedNumber(new BigNumber(1129320.123456), 4);

      expect(result).toBe("1129320.1235");
    });
  });

  describe("capitalize", () => {
    it("should return an empty string if no value has been provided", () => {
      const result = capitalize(null);

      expect(result).toBe("");
    });

    it("should return the same string if one char has been provided", () => {
      const result = capitalize("a");

      expect(result).toBe("a");
    });

    it("should return the capitalized variant of the string", () => {
      const result = capitalize("cAPITALIZED");

      expect(result).toBe("Capitalized");
    });
  });

  describe("formatPair", () => {
    it("should format BTC/USDC", () => {
      const result = formatPair(PairId.btcusdc);

      expect(result).toBe("BTC/USDC");
    });
  });
});
