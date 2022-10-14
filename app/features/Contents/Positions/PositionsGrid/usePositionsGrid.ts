/* istanbul ignore file */

import { ColumnProps, RowProps } from "@/components";
import { useClearingHouse, useToken } from "@/hooks/contracts";
import { useStore } from "@/stores/root";

export default function usePositionsGrid() {
  const { getPositionsGridData } = useStore((state) => state.userPositions);
  const { closePosition } = useClearingHouse();
  const { getTokenBalance } = useToken();
  const dataProvider = getPositionsGridData();

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
