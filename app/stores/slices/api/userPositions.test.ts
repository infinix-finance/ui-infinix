import { PairId } from "@/defi";
import { getInitialState, useStore } from "@/stores/root";

describe("userPositions slice", () => {
  const historyEntry1 = {
    timestamp: 1654832730,
    type: "Opening",
    entryPrice: "106080000000000000043",
    underlyingPrice: "44489137202278124603",
    size: "1885369532428355957",
    fundingPayment: "0",
    leverage: "2000000000000000000",
    notification: true,
    margin: "100000000000000000000",
    fee: "0",
    realizedPnl: "0",
    unrealizedPnlAfter: "0",
  };
  const historyEntry2 = {
    timestamp: 1654832745,
    type: "Margin Changing",
    entryPrice: "82000000000000000000",
    underlyingPrice: "44489137202278124603",
    size: "-1",
    fundingPayment: "0",
  };

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
        },
      },
      userPositions: {
        ...initialState.userPositions,
        list: [
          {
            position: {
              amm: "0xe5639cbb02ec3bd65c77e128b0c7350aeefb2bd1",
            } as any,
            history: [historyEntry1, historyEntry2],
          },
        ],
      },
    };

    useStore.setState(state);
  });

  describe("getHistory", () => {
    test("should return the history list sorted by timestamp in descending order", () => {
      const expected = [{ timestamp: 1654832745 }, { timestamp: 1654832730 }];

      const result = useStore.getState().userPositions.getHistory();

      expect(result).toMatchObject(expected);
    });

    test("should copy over amm and calculate pairId", () => {
      const expected = {
        amm: "0xe5639cbb02ec3bd65c77e128b0c7350aeefb2bd1",
        pairId: PairId.AVAXUSDC,
      };

      const [firstItem] = useStore.getState().userPositions.getHistory();

      expect(firstItem).toMatchObject(expected);
    });

    test("should update those entries that's type is 'Margin Changing' by copying over other props from the previous entry", () => {
      const expected = [
        {
          ...historyEntry1,
          ...historyEntry2,
        },
        historyEntry1,
      ];

      const result = useStore.getState().userPositions.getHistory();

      expect(result).toMatchObject(expected);
    });
  });
});
