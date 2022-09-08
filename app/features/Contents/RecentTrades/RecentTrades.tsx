/* istanbul ignore file */
import { Box, Typography } from "@mui/material";

import { ColumnProps, DataGrid, RowProps } from "@/components";

import { containerStyle } from "./RecentTrades.styles";
import useRecentTrades from "./useRecentTrades";

const priceCellRenderer = (row: RowProps, column: ColumnProps) => (
  <Typography variant="body3" color={row.directionColor}>
    {row[column.key]}
  </Typography>
);

const columns: ColumnProps[] = [
  {
    title: "Entry Price",
    key: "price",
    align: "left",
    cellRenderer: priceCellRenderer,
  },
  {
    title: "Size (USDC)",
    key: "size",
    align: "center",
  },
  { title: "Time", key: "time", align: "right" },
];

export const RecentTrades = () => {
  const { dataProvider } = useRecentTrades();

  return (
    <Box sx={containerStyle}>
      <DataGrid columns={columns} dataProvider={dataProvider} hover={false} />
    </Box>
  );
};
