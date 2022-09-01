import { TokenId } from "@/defi";
import {
  formatAmount,
  shortenAddress,
  toFixedAmount,
} from "@/utils/formatters";
import BigNumber from "bignumber.js";

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

  describe("formatAmount", () => {
    it("should return the number only", () => {
      const result = formatAmount(new BigNumber(320));

      expect(result).toBe("320.00");
    });

    it("should add thousand separators above 1K by default", () => {
      const result = formatAmount(new BigNumber(1129320));

      expect(result).toBe("1,129,320.00");
    });

    it("should not add thousand separators above 1K if set explicitly", () => {
      const result = formatAmount(new BigNumber(1129320), {
        withThousandSeparator: false,
      });

      expect(result).toBe("1129320.00");
    });

    it("should return the number with prefix", () => {
      const result = formatAmount(new BigNumber(320), { prefix: "$" });

      expect(result).toBe("$320.00");
    });

    it("should return the number with token symbol", () => {
      const result = formatAmount(new BigNumber(320), {
        productId: TokenId.usdc,
      });

      expect(result).toBe("320.00 USDC");
    });

    it("should return the number with everything customized", () => {
      const result = formatAmount(new BigNumber(320), {
        base: 4,
        prefix: "$",
        productId: TokenId.usdc,
      });

      expect(result).toBe("$320.0000 USDC");
    });
  });

  describe("toFixedAmount", () => {
    it("should return number rounded to 2 digits by default", () => {
      const result = toFixedAmount(new BigNumber(1129320.123456));

      expect(result).toBe("1129320.12");
    });

    it("should return number rounded to 4 digits by default", () => {
      const result = toFixedAmount(new BigNumber(1129320.123456), 4);

      expect(result).toBe("1129320.1235");
    });
  });
});
