/* istanbul ignore file */

import { ColumnProps, RowProps } from "@/components";
import { useStore } from "@/stores/root";
import { getPositions } from "@/stores/slices/api/userPositions";
import { createDataProvider } from "./utils";

export default function usePositionsGrid() {
  const positions = useStore(getPositions);
  const { getPairName } = useStore((state) => state.markets);
  const dataProvider = createDataProvider(positions, getPairName);

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
