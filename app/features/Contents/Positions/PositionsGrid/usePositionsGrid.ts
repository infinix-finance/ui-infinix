/* istanbul ignore file */
import { useEffect, useState } from "react";

import { ColumnProps, RowProps } from "@/components";
import { useToken, useClearingHouse } from "@/hooks/contracts";
import { useStore } from "@/stores/root";
import { PositionGridData } from "@/stores/slices/api/userPositions.types";

export default function usePositionsGrid() {
  const [dataProvider, setDataProvider] = useState<PositionGridData[]>([]);
  const { getPositionsGridData, positionsList } = useStore(
    (state) => state.userPositions
  );
  const { ready } = useStore((state) => state.markets);
  const { closePosition } = useClearingHouse();
  const { getTokenBalance } = useToken();

  useEffect(() => {
    if (!ready) return;

    setDataProvider(getPositionsGridData());
  }, [ready, positionsList, getPositionsGridData]);

  const handleHeaderClick = (column: ColumnProps) => {
    console.log("header clicked", column);
  };

  const handleRowClick = (row: RowProps, column: ColumnProps) => {
    // TODO: We might need to replace "0" with something else later
    column.key === "close" && closePosition(row.amm, "0").then(getTokenBalance);
  };

  return {
    dataProvider,
    handleHeaderClick,
    handleRowClick,
  };
}
