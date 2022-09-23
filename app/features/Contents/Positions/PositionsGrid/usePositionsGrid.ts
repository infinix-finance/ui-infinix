/* istanbul ignore file */

import { ColumnProps, RowProps } from "@/components";
import { useClearingHouse } from "@/hooks/contracts";
import { useStore } from "@/stores/root";
import { createDataProvider } from "./utils";

export default function usePositionsGrid() {
  const { getPositions } = useStore((state) => state.userPositions);
  const { getPairName } = useStore((state) => state.markets);
  const { closePosition } = useClearingHouse();
  const positions = getPositions();
  const dataProvider = createDataProvider(positions, getPairName);

  const handleHeaderClick = (column: ColumnProps) => {
    console.log("header clicked", column);
  };

  const handleRowClick = (row: RowProps, column: ColumnProps) => {
    column.key === "close" && closePosition(row.amm, row.originalSize);
  };

  return {
    dataProvider,
    handleHeaderClick,
    handleRowClick,
  };
}
