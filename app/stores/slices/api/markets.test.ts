import { getInitialState, useStore } from "@/stores/root";

describe("userPositions slice", () => {
  beforeAll(() => {
    const initialState = getInitialState();
    const state = {
      ...initialState,
      markets: {
        ...initialState.markets,
        list: {
          Crypto: {
            BTCUSDC: "0x0",
            AVAXUSDC: "0xe5639cbb02ec3bd65c77e128b0c7350aeefb2bd1",
          },
          Other: {
            EURUSD: "0x0",
            AUDCHF: "0x0",
          },
        },
      },
    };
    useStore.setState(state);
  });

  describe("getPairName", () => {
    test("should return AVAXUSDC", () => {
      const result = useStore
        .getState()
        .markets.getPairName("0xe5639cbb02ec3bd65c77e128b0c7350aeefb2bd1");

      expect(result).toBe("avaxusdc");
    });

    test("should return empty string for non-existent amm", () => {
      const result = useStore.getState().markets.getPairName("0x123456789");

      expect(result).toBe("");
    });
  });

  describe("getFlattenedPairs", () => {
    test("should return the flattened list of pairs without their market info", () => {
      const expected = {
        BTCUSDC: "0x0",
        AVAXUSDC: "0xe5639cbb02ec3bd65c77e128b0c7350aeefb2bd1",
        EURUSD: "0x0",
        AUDCHF: "0x0",
      };

      const result = useStore.getState().markets.getFlattenedPairs();

      expect(result).toMatchObject(expected);
    });
  });
});
