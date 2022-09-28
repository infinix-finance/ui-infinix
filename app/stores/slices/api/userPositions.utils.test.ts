import { PairId } from "@/defi";
import { getInitialState, useStore } from "@/stores/root";
import {
  createHistoryGridData,
  createPositionGridData,
  transformHistory,
  transformPositions,
} from "./userPositions.utils";

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
  const list = [
    {
      position: {
        amm: "0xe5639cbb02ec3bd65c77e128b0c7350aeefb2bd1",
        leverage: "2000000000000000000",
        underlyingPrice: "44489137202278124603",
        margin: "41",
        fee: "0",
        trader: "0xb9c3a80c8e903df935f1cdf9688f5bd154002b8b",
        fundingPayment: "0",
        active: true,
        tradingVolume: "400000000000000000000",
        entryPrice: "82000000000000000000",
        badDebt: "0",
        size: "-1",
        unrealizedPnl: "0",
        totalPnlAmount: "-82",
        openNotional: "82",
        realizedPnl: "-82",
        liquidationPenalty: "0",
        timestamp: 1654832745,
      },
      history: [historyEntry1, historyEntry2],
    },
  ];

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
    };

    useStore.setState(state);
  });

  describe("transformHistory", () => {
    test("should return the history list sorted by timestamp in descending order", () => {
      const expected = [{ timestamp: 1654832745 }, { timestamp: 1654832730 }];

      const result = transformHistory(list, useStore.getState());

      expect(result).toMatchObject(expected);
    });

    test("should copy over amm and calculate pairId", () => {
      const expected = {
        amm: "0xe5639cbb02ec3bd65c77e128b0c7350aeefb2bd1",
        pairId: PairId.AVAXUSDC,
      };

      const [firstItem] = transformHistory(list, useStore.getState());

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

      const result = transformHistory(list, useStore.getState());

      expect(result).toMatchObject(expected);
    });
  });

  describe("createHistoryGridData", () => {
    test("should return a history grid entry as expected", () => {
      const expected = {
        amount: "-0.00",
        date: "10/06/2022",
        direction: "Short",
        directionColor: "alert.guava",
        fee: "$0.00",
        id: "1654832745000AVAXUSDC",
        leverage: "2X",
        pair: {
          id: "AVAXUSDC",
          marketId: "Crypto",
          productIds: ["AVAX", "USDC"],
        },
        price: "$82.00",
        profitAndLoss: "",
        symbol: "AVAX/USDC",
        time: "03:45:45",
        total: "$0.00",
        type: "Open",
      };

      const [firstRow] = createHistoryGridData(
        transformHistory(list, useStore.getState())
      );

      expect(firstRow).toMatchObject(expected);
    });
  });

  describe("transformPositions", () => {
    test("should calculate pairId based on the amm", () => {
      const expected = {
        amm: "0xe5639cbb02ec3bd65c77e128b0c7350aeefb2bd1",
        pairId: PairId.AVAXUSDC,
      };

      const [firstRow] = transformPositions(list, useStore.getState());

      expect(firstRow).toEqual(expect.objectContaining(expected));
    });
  });

  describe("createPositionGridData", () => {
    test("should return a positions grid entry as expected", () => {
      const expected = {
        amm: "0xe5639cbb02ec3bd65c77e128b0c7350aeefb2bd1",
        direction: "Short",
        directionColor: "alert.guava",
        entryPrice: "$82.00",
        id: "AVAXUSDC",
        isInProfit: false,
        leverage: "2X",
        liquidationPrice: "",
        marginRatio: "",
        markPrice: "$44.49",
        originalSize: "-1",
        pair: {
          id: "AVAXUSDC",
          marketId: "Crypto",
          productIds: ["AVAX", "USDC"],
        },
        profitAndLoss: "",
        size: "-0.00 USDC",
        symbol: "AVAX/USDC",
      };

      const [firstRow] = createPositionGridData(
        transformPositions(list, useStore.getState())
      );

      expect(firstRow).toMatchObject(expected);
    });
  });
});
