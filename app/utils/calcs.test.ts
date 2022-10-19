import BigNumber from "bignumber.js";
import { calculateChange, calculateChangePercentage } from "./calcs";

describe("calcs", () => {
  describe("calculateChange", () => {
    it("should return a positive change value", () => {
      const result = calculateChange(new BigNumber(0.1), new BigNumber(0.025));

      expect(result.toNumber()).toBe(0.075);
    });

    it("should return a negative change value", () => {
      const result = calculateChange(new BigNumber(0.025), new BigNumber(0.1));

      expect(result.toNumber()).toBe(-0.075);
    });
  });

  describe("calculateChangePercentage", () => {
    it("should return a positive change in percentage", () => {
      const result = calculateChangePercentage(
        new BigNumber(0.1),
        new BigNumber(0.025)
      );

      expect(result.toNumber()).toBe(75);
    });

    it("should return a negative change in percentage", () => {
      const result = calculateChangePercentage(
        new BigNumber(0.025),
        new BigNumber(0.1)
      );

      expect(result.toNumber()).toBe(-300);
    });

    it("should return zero for when the calcs would otherwise return NaN", () => {
      const result = calculateChangePercentage(
        new BigNumber(0),
        new BigNumber(0)
      );

      expect(result.toNumber()).toBe(0);
    });

    it("should return zero for when the calcs would otherwise return Infinity", () => {
      const result = calculateChangePercentage(
        new BigNumber(0),
        new BigNumber(100)
      );

      expect(result.toNumber()).toBe(0);
    });
  });
});
