/* istanbul ignore file */
import { ColumnProps, RowProps } from "@/components";
import { useStore } from "@/stores/root";
import { createDataProvider } from "./utils";

export default function useHistoryGrid() {
  const { getHistory } = useStore((state) => state.userPositions);
  const history = getHistory();
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
