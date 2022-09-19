/* istanbul ignore file */

import { ColumnProps, RowProps } from "@/components";
import { useStore } from "@/stores/root";

// TODO: REMOVE

/* const positions = [
  {
    pairId: PairId.ethusdc,
    direction: Directions.Long,
    leverage: 1,
    size: new BigNumber(2.1),
    entryPrice: new BigNumber(1270.0367),
    markPrice: new BigNumber(1269.55),
    marginRatio: 2,
    liquidationPrice: new BigNumber(1220.0),
    unrealizedPnl: new BigNumber(31.12),
  },
  {
    pairId: PairId.btcusdc,
    direction: Directions.Short,
    leverage: 3,
    size: new BigNumber(-0.341),
    entryPrice: new BigNumber(21010.1122),
    markPrice: new BigNumber(21009.987),
    marginRatio: 1,
    liquidationPrice: new BigNumber(21201.666),
    unrealizedPnl: new BigNumber(-237.88),
  },
  {
    pairId: PairId.avaxusdc,
    direction: Directions.Long,
    leverage: 1,
    size: new BigNumber(2.5),
    entryPrice: new BigNumber(1275.2205),
    markPrice: new BigNumber(1273.22),
    marginRatio: 2,
    liquidationPrice: new BigNumber(1212.11),
    unrealizedPnl: new BigNumber(101.01),
  },
  {
    pairId: PairId.chaosusdc,
    direction: Directions.Short,
    leverage: 1,
    size: new BigNumber(2.5),
    entryPrice: new BigNumber(1275.2205),
    markPrice: new BigNumber(1273.22),
    marginRatio: 2,
    liquidationPrice: new BigNumber(1212.11),
    unrealizedPnl: new BigNumber(101.01),
  },
  {
    pairId: PairId.chaosusdc,
    direction: Directions.Short,
    leverage: 1,
    size: new BigNumber(2.5),
    entryPrice: new BigNumber(1275.2205),
    markPrice: new BigNumber(1273.22),
    marginRatio: 2,
    liquidationPrice: new BigNumber(1212.11),
    unrealizedPnl: new BigNumber(101.01),
  },
];
*/
export default function usePositionsGrid() {
  /* const dataProvider = createDataProvider([]); */
  const userPositions = useStore((state) => state.userPositions);
  const amm = useStore((state) => state.amm);
  const markets = useStore((state) => state.markets);

  const handleHeaderClick = (column: ColumnProps) => {
    console.log("header clicked", column);
  };

  const handleRowClick = (row: RowProps, column: ColumnProps) => {
    console.log("row clicked", row, column);
  };

  return {
    dataProvider: [],
    handleHeaderClick,
    handleRowClick,
  };
}
