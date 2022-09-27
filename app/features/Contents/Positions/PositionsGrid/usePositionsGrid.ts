/* istanbul ignore file */

import { ColumnProps, RowProps } from "@/components";
import { useClearingHouse } from "@/hooks/contracts";
import { useStore } from "@/stores/root";
import { useEffect, useState } from "react";
import { createDataProvider } from "./utils";

export default function usePositionsGrid() {
  const [dataProvider, setDataProvider] = useState<{}[]>([]);
  const { getPositions, list } = useStore((state) => state.userPositions);
  const { getPairName, ready } = useStore((state) => state.markets);
  const { closePosition } = useClearingHouse();

  useEffect(() => {
    if (!ready) return;

    setDataProvider(createDataProvider(getPositions(), getPairName));
  }, [ready, list]);

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
