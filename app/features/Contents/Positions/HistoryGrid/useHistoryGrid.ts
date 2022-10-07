/* istanbul ignore file */

import { ColumnProps, RowProps } from "@/components";
import { useStore } from "@/stores/root";

export default function useHistoryGrid() {
  const { getHistoryGridData } = useStore((state) => state.userPositions);
  const dataProvider = getHistoryGridData();

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
