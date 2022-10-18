/* istanbul ignore file */
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { Box, Button, Typography } from "@mui/material";

import {
  ColumnProps,
  DataGrid,
  HeaderClickFunc,
  RowClickFunc,
  RowProps,
} from "@/components";
import { Directions } from "@/defi";
import { useStore } from "@/stores/root";
import { LoadingButton } from "@mui/lab";
import { ConnectionOverlay } from "../ConnectionOverlay";
import {
  negativePnlStyle,
  neutralIndicatorStyle,
  positivePnlStyle,
} from "../Positions.styles";
import usePositionsGrid from "./usePositionsGrid";

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

const timeCellRenderer = (row: RowProps) => (
  <Box display="flex" flexDirection="column" gap={1}>
    <Typography variant="body3">{row.date}</Typography>
    <Typography variant="caption" color="secondary.graishLavender">
      {row.time}
    </Typography>
  </Box>
);

const sizeCellRenderer = (row: RowProps, column: ColumnProps) => (
  <Box display="flex" flexDirection="row" gap={1}>
    {row.originalDirection === Directions.Long ? (
      <ArrowDropUpIcon sx={positivePnlStyle} />
    ) : (
      <ArrowDropDownIcon sx={negativePnlStyle} />
    )}
    <Typography variant="body3" color={row.directionColor}>
      {row[column.key]}
    </Typography>
  </Box>
);

const liquidationPriceCellRenderer = (row: RowProps, column: ColumnProps) => (
  <Typography variant="body3" color="featured.grape">
    {row[column.key]}
  </Typography>
);

const pnlCellRenderer = (row: RowProps, column: ColumnProps) => {
  const sx = row.originalProfitAndLoss.gte(0)
    ? positivePnlStyle
    : negativePnlStyle;
  return (
    <Typography variant="body3" sx={sx}>
      {row[column.key]}
    </Typography>
  );
};

const closeHeaderRenderer = (column: ColumnProps, onClick: HeaderClickFunc) => (
  <Button
    variant="contained"
    size="small"
    disabled={true} // TODO: Remove after we add this functionality
    onClick={() => onClick(column)}
  >
    Close All
  </Button>
);

const closeCellRenderer = (
  row: RowProps,
  column: ColumnProps,
  onClick: RowClickFunc
) => (
  <LoadingButton
    variant="outlined"
    size="small"
    loading={row.isClosing}
    onClick={() => onClick(row, column)}
  >
    Close
  </LoadingButton>
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
  { title: "Last Update", key: "time", cellRenderer: timeCellRenderer },
  {
    title: "Nominal Position Size",
    key: "size",
    cellRenderer: sizeCellRenderer,
  },
  { title: "Entry Price", key: "entryPrice" },
  { title: "Mark Price", key: "markPrice" },
  {
    title: "Liq. Price (est.)",
    key: "liquidationPrice",
    cellRenderer: liquidationPriceCellRenderer,
  },
  {
    title: "PnL (ROE%)",
    key: "profitAndLoss",
    cellRenderer: pnlCellRenderer,
  },
  {
    title: "",
    key: "close",
    width: "1px",
    headerRenderer: closeHeaderRenderer,
    cellRenderer: closeCellRenderer,
  },
  {
    title: "",
    key: "share",
    width: "1px",
    cellRenderer: shareCellRenderer,
  },
];

export const PositionsGrid = () => {
  const { dataProvider, handleHeaderClick, handleRowClick } =
    usePositionsGrid();
  const { active } = useStore((state) => state.connection);

  return (
    <DataGrid
      columns={columns}
      dataProvider={dataProvider}
      onHeaderClick={handleHeaderClick}
      onRowClick={handleRowClick}
    >
      {!active && <ConnectionOverlay />}
    </DataGrid>
  );
};
