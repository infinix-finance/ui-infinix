/* istanbul ignore file */

import { ColumnProps, RowProps } from "@/components";
import { useClearingHouse } from "@/hooks/contracts";
import { useStore } from "@/stores/root";
import { getPositions } from "@/stores/slices/api/userPositions";
import { createDataProvider } from "./utils";

export default function usePositionsGrid() {
  const positions = useStore(getPositions);
  const { closePosition } = useClearingHouse();
  const { getPairName } = useStore((state) => state.markets);
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
