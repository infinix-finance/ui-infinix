/* istanbul ignore file */
import BigNumber from "bignumber.js";

import { ColumnProps, RowProps } from "@/components";
import { Directions, PairId } from "@/defi";
import { PositionTypes } from "@/defi/PositionTypes";

import { createDataProvider } from "./utils";

const history = [
  {
    pairId: PairId.ethusdc,
    direction: Directions.Long,
    leverage: 1,
    liquidated: false,
    dateTime: new Date(),
    type: PositionTypes.Market,
    amount: new BigNumber(1),
    price: new BigNumber(1270.11),
    total: new BigNumber(1270.11),
    fee: new BigNumber(11.2),
    unrealizedPnl: new BigNumber(31.12),
  },
  {
    pairId: PairId.btcusdc,
    direction: Directions.Short,
    leverage: 3,
    liquidated: true,
    dateTime: new Date(),
    type: PositionTypes.Liquidated,
    amount: new BigNumber(2),
    price: new BigNumber(21000.11),
    total: new BigNumber(42000.22),
    fee: new BigNumber(200.1),
    unrealizedPnl: new BigNumber(-237.88),
  },
  {
    pairId: PairId.avaxusdc,
    direction: Directions.Long,
    leverage: 1,
    liquidated: false,
    dateTime: new Date(),
    type: PositionTypes.Market,
    amount: new BigNumber(1),
    price: new BigNumber(1279.22),
    total: new BigNumber(1279.22),
    fee: new BigNumber(19.2134),
    unrealizedPnl: new BigNumber(101.01),
  },
];

export default function useHistoryGrid() {
  const dataProvider = createDataProvider(history);

  const handleHeaderClick = (column: ColumnProps) => {
    console.log("header clicked", column);
  };

  const handleRowClick = (row: RowProps, column: ColumnProps) => {
    console.log("row clicked", row, column);
  };

  return {
    dataProvider,
    handleHeaderClick,
    handleRowClick,
  };
}
