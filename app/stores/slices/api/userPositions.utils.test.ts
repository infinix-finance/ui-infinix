import { PairId } from "@/defi";
import { getInitialState, useStore } from "@/stores/root";
import {
  createHistoryGridData,
  createNotificationHistoryData,
  createPositionGridData,
  transformHistory,
  transformPositions,
} from "./userPositions.utils";

import {
  historyEntry1,
  historyEntry2,
  historyEntry3,
  historyEntry4,
  positions,
} from "@/__mocks__/positionsMock";

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
        },
      },
    };

    useStore.setState(state);
  });

  describe("transformHistory", () => {
    test("should return the history list sorted by timestamp in descending order", () => {
      const expected = [
        { timestamp: 1664975437 },
        { timestamp: 1664975248 },
        { timestamp: 1654832745 },
        { timestamp: 1654832730 },
      ];

      const result = transformHistory(positions, useStore.getState());

      expect(result).toMatchObject(expected);
    });

    test("should copy over amm and calculate pairId", () => {
      const expected = {
        amm: "0xe5639cbb02ec3bd65c77e128b0c7350aeefb2bd1",
        pairId: PairId.AVAXUSDC,
      };

      const [firstItem] = transformHistory(positions, useStore.getState());

      expect(firstItem).toMatchObject(expected);
    });

    test("should update those entries that's type is 'Margin Changing' by copying over other props from the previous entry", () => {
      const expected = [
        {
          ...historyEntry3,
          type: historyEntry4.type,
          timestamp: historyEntry4.timestamp,
        },
        historyEntry3,
        {
          ...historyEntry1,
          ...historyEntry2,
        },
        historyEntry1,
      ];

      const result = transformHistory(positions, useStore.getState());

      expect(result).toMatchObject(expected);
    });
  });

  describe("createHistoryGridData", () => {
    test("should return a history grid entry with status=Closing as expected", () => {
      const expected = {
        amount: "0.15",
        date: "05/10/2022",
        direction: "Long",
        directionColor: "alert.lemon",
        fee: "$0.00",
        id: "1664975437000AVAXUSDC",
        leverage: "1X",
        pair: {
          id: "AVAXUSDC",
          marketId: "Crypto",
          productIds: ["AVAX", "USDC"],
        },
        price: "$100.15",
        profitAndLoss: "",
        symbol: "AVAX/USDC",
        time: "13:10:37",
        total: "$15.00",
        type: "Closed",
      };

      const [firstRow] = createHistoryGridData(
        transformHistory(positions, useStore.getState())
      );

      expect(firstRow).toMatchObject(expected);
    });

    test("should return a history grid entry with status=Margin Changing as expected", () => {
      const expected = {
        amount: "0.00",
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

      const [, , thirdRow] = createHistoryGridData(
        transformHistory(positions, useStore.getState())
      );

      expect(thirdRow).toMatchObject(expected);
    });
  });

  describe("transformPositions", () => {
    test("should calculate pairId based on the amm", () => {
      const expected = {
        amm: "0xe5639cbb02ec3bd65c77e128b0c7350aeefb2bd1",
        pairId: PairId.AVAXUSDC,
      };

      const [firstRow] = transformPositions(positions, useStore.getState());

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
        size: "0.00 USDC",
        symbol: "AVAX/USDC",
        isClosing: false,
      };

      const [firstRow] = createPositionGridData(
        transformPositions(positions, useStore.getState()),
        []
      );

      expect(firstRow).toMatchObject(expected);
    });
  });

  describe("createNotificationHistoryData", () => {
    test("should return a notification entry as expected", () => {
      const expected = {
        direction: "short",
        id: "1654832745000AVAXUSDC",
        productIds: ["AVAX", "USDC"],
        rows: [
          {
            label: "10/06/2022",
            value: "03:45:45",
          },
          {
            label: "Entry Price",
            value: "$82.00",
          },
          {
            label: "Mark Price",
            value: "$44.49",
          },
          {
            label: "Position Size",
            value: "0.00",
          },
          {
            label: "Liq. Price (est.)",
            value: "",
          },
        ],
        status: "Open",
      };
      const [, , thirdRow] = createNotificationHistoryData(
        transformHistory(positions, useStore.getState())
      );

      expect(thirdRow).toMatchObject(expected);
    });
  });
});
