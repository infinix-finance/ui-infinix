import { MarketId } from "@/defi";
import {
  generateMarketDropdownProps,
  generatePairDropdownProps,
} from "./utils";

describe("TopBar utils", () => {
  describe("generateMarketDropdownProps", () => {
    test("should generate market dropdown props", () => {
      const marketProps = generateMarketDropdownProps();
      expect(marketProps).toMatchSnapshot();
    });
  });

  describe("generateMarketDropdownProps", () => {
    test("should generate crypto market dropdown props", () => {
      const pairProps = generatePairDropdownProps();
      expect(pairProps[MarketId.crypto]).toMatchSnapshot();
    });

    test("should generate commodities market dropdown props", () => {
      const pairProps = generatePairDropdownProps();
      expect(pairProps[MarketId.commodities]).toMatchSnapshot();
    });

    test("should generate S&P 500 market dropdown props", () => {
      const pairProps = generatePairDropdownProps();
      expect(pairProps[MarketId.sp500]).toMatchSnapshot();
    });
  });
});
