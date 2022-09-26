import { MarketId } from "@/defi";
import { getInitialState, useStore } from "@/stores/root";
import {
  generateMarketDropdownProps,
  generatePairDropdownProps,
} from "./utils";

describe("TopBar utils", () => {
  beforeAll(() => {
    const initialState = getInitialState();
    const state = {
      ...initialState,
      markets: {
        ...initialState.markets,
        list: {
          Crypto: {
            BTCUSDC: "0x0",
            SOLUSDC: "0x0",
            AVAXUSDC: "0xe5639cbb02ec3bd65c77e128b0c7350aeefb2bd1",
          },
          SPPlatts: {
            BATCH04: "0x0",
            BATCP04: "0x0",
            CNCAD00: "0x0",
            ACRCA00: "0x0",
          },
          SPIndices: {
            SPBTC: "0x0",
            SPETH: "0x0",
          },
        },
      },
    };

    useStore.setState(state);
  });

  describe("generateMarketDropdownProps", () => {
    test("should generate market dropdown props", () => {
      const marketProps = generateMarketDropdownProps();
      expect(marketProps).toMatchSnapshot();
    });
  });

  describe("generateMarketDropdownProps", () => {
    test("should generate crypto market dropdown props", () => {
      const pairProps = generatePairDropdownProps(MarketId.Crypto);
      expect(pairProps).toMatchSnapshot();
    });

    test("should generate S&P Platts market dropdown props", () => {
      const pairProps = generatePairDropdownProps(MarketId.SPPlatts);
      expect(pairProps).toMatchSnapshot();
    });

    test("should generate S&P Indices market dropdown props", () => {
      const pairProps = generatePairDropdownProps(MarketId.SPIndices);
      expect(pairProps).toMatchSnapshot();
    });
  });
});
