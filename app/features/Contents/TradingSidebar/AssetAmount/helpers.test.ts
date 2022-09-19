import BigNumber from "bignumber.js";

import {
  calculateBaseAmount,
  calculateQuoteAmount,
  convertBaseToQuoteAmount,
  convertQuoteToBaseAmount,
} from "./helpers";

describe("AssetAmount helpers", () => {
  describe("calculateBaseAmount", () => {
    it("should not alter the passed value below balance", () => {
      const result = calculateBaseAmount(
        "200.34",
        new BigNumber(120),
        new BigNumber(0.5)
      );

      expect(result).toBe("200.34");
    });

    it("should alter the passed value above balance", () => {
      const result = calculateBaseAmount(
        "250",
        new BigNumber(120),
        new BigNumber(0.5)
      );

      expect(result).toBe("240.00");
    });
  });

  describe("calculateQuoteAmount", () => {
    it("should not alter the passed value below balance", () => {
      const result = calculateQuoteAmount("110", new BigNumber(120));

      expect(result).toBe("110");
    });

    it("should alter the passed value above balance", () => {
      const result = calculateQuoteAmount("130", new BigNumber(120));

      expect(result).toBe("120.00");
    });
  });

  describe("convertQuoteToBaseAmount", () => {
    it("should convert quote amount to base amount", () => {
      const result = convertQuoteToBaseAmount(
        "110",
        new BigNumber(120),
        new BigNumber(0.5)
      );

      expect(result).toBe("220.00");
    });

    it("should convert quote amount to base amount with an upper limit(balance) in effect", () => {
      const result = convertQuoteToBaseAmount(
        "5000",
        new BigNumber(120),
        new BigNumber(0.5)
      );

      expect(result).toBe("240.00");
    });
  });

  describe("convertBaseToQuoteAmount", () => {
    it("should convert base amount to quote amount", () => {
      const result = convertBaseToQuoteAmount(
        "220",
        new BigNumber(120),
        new BigNumber(0.5)
      );

      expect(result).toBe("110.00");
    });

    it("should convert base amount to quote amount with an upper limit(balance) in effect", () => {
      const result = convertBaseToQuoteAmount(
        "5000",
        new BigNumber(120),
        new BigNumber(0.5)
      );

      expect(result).toBe("120.00");
    });
  });
});
