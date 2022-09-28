/* istanbul ignore file */
import { useEffect, useState } from "react";

import { ColumnProps, RowProps } from "@/components";
import { useClearingHouse } from "@/hooks/contracts";
import { useStore } from "@/stores/root";
import { PositionGridData } from "@/stores/slices/api/userPositions.types";

export default function usePositionsGrid() {
  const [dataProvider, setDataProvider] = useState<PositionGridData[]>([]);
  const { getPositionsGridData, list } = useStore(
    (state) => state.userPositions
  );
  const { ready } = useStore((state) => state.markets);
  const { closePosition } = useClearingHouse();

  useEffect(() => {
    if (!ready) return;

    setDataProvider(getPositionsGridData());
  }, [ready, list, getPositionsGridData]);

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
