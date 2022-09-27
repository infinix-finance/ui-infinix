/* istanbul ignore file */
import { useEffect, useState } from "react";

import { ColumnProps, RowProps } from "@/components";
import { useStore } from "@/stores/root";
import { createDataProvider } from "./utils";

export default function useHistoryGrid() {
  const [dataProvider, setDataProvider] = useState<{}[]>([]);
  const { getHistory, list } = useStore((state) => state.userPositions);
  const { ready } = useStore((state) => state.markets);

  useEffect(() => {
    if (!ready) return;

    setDataProvider(createDataProvider(getHistory()));
  }, [ready, list]);

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
