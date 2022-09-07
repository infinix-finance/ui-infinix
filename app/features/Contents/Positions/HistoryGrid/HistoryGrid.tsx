import { Box, Button, Typography } from "@mui/material";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";

import {
  ColumnProps,
  DataGrid,
  HeaderClickFunc,
  RowClickFunc,
  RowProps,
} from "@/components";
import useHistoryGrid from "./useHistoryGrid";
import { indicatorStyle, neutralIndicatorStyle } from "../Positions.styles";

const symbolCellRenderer = (row: RowProps, column: ColumnProps) => (
  <Box display="flex" flexDirection="column" gap={1}>
    <Typography variant="body3">{row[column.key]}</Typography>
    <Typography variant="caption" color={row.directionColor}>
      {row.direction}
    </Typography>
  </Box>
);

const leverageCellRenderer = (row: RowProps, column: ColumnProps) => (
  <Box>
    <Typography sx={neutralIndicatorStyle} variant="body3">
      {row[column.key]}
    </Typography>
  </Box>
);

const typeCellRenderer = (row: RowProps, column: ColumnProps) => (
  <Box>
    <Typography sx={indicatorStyle(row.liquidated)} variant="body3">
      {row[column.key]}
    </Typography>
  </Box>
);

const timeCellRenderer = (row: RowProps) => (
  <Box display="flex" flexDirection="column" gap={1}>
    <Typography variant="body3">{row.date}</Typography>
    <Typography variant="caption" color="secondary.graishLavender">
      {row.time}
    </Typography>
  </Box>
);

const pnlCellRenderer = (row: RowProps, column: ColumnProps) => (
  <Box display="flex" flexDirection="column" gap={1}>
    <Typography variant="body3" color={row.directionColor}>
      {row[column.key]}
    </Typography>
  </Box>
);

const exportHeaderRenderer = (
  column: ColumnProps,
  onClick: HeaderClickFunc
) => (
  <Button variant="contained" size="small" onClick={() => onClick(column)}>
    Export History
  </Button>
);

const shareCellRenderer = (
  row: RowProps,
  column: ColumnProps,
  onClick: RowClickFunc
) => (
  <Button variant="outlined" size="small" onClick={() => onClick(row, column)}>
    <ShareOutlinedIcon sx={{ width: "0.875rem", height: "0.875rem" }} />
  </Button>
);

const columns: ColumnProps[] = [
  {
    title: "Symbol",
    key: "symbol",
    cellRenderer: symbolCellRenderer,
  },
  {
    title: "",
    key: "leverage",
    width: "1px",
    cellRenderer: leverageCellRenderer,
  },
  { title: "Time", key: "time", cellRenderer: timeCellRenderer },
  { title: "Type", key: "type", cellRenderer: typeCellRenderer },
  { title: "Amount", key: "amount" },
  { title: "Price", key: "price" },
  { title: "Total", key: "total" },
  { title: "Fee", key: "fee" },
  {
    title: "Realited Profit",
    key: "profitAndLoss",
    cellRenderer: pnlCellRenderer,
  },
  {
    title: "",
    key: "export",
    width: "1px",
    headerRenderer: exportHeaderRenderer,
  },
  {
    title: "",
    key: "share",
    width: "1px",
    cellRenderer: shareCellRenderer,
  },
];

export const HistoryGrid = () => {
  const { dataProvider, handleHeaderClick, handleRowClick } = useHistoryGrid();

  return (
    <DataGrid
      columns={columns}
      dataProvider={dataProvider}
      onHeaderClick={handleHeaderClick}
      onRowClick={handleRowClick}
    />
  );
};
