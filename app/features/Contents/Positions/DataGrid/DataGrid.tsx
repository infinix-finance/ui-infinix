import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";

import {
  headRowStyle,
  rowStyle,
  shareIconStyle,
  tableStyle,
} from "./DataGrid.styles";

const columns = [
  { title: "Dessert (100g serving)", key: "name", align: "left" },
  { title: "Calories", key: "cals", align: "left" },
  { title: "Fat (g)", key: "fat", align: "left" },
  { title: "Carbs (g)", key: "carbs", align: "right" },
  {
    title: "",
    key: "close",
    align: "left",
    width: "1px",
    headerRenderer: (column: any, onClick: any) => (
      <Button variant="contained" size="small" onClick={() => onClick(column)}>
        Close All
      </Button>
    ),
    cellRenderer: (row: any, column: any, onClick: any) => (
      <Button
        variant="outlined"
        size="small"
        onClick={() => onClick(row, column)}
      >
        Close
      </Button>
    ),
  },
  {
    title: "",
    key: "share",
    align: "right",
    width: "1px",
    cellRenderer: (row: any, column: any, onClick: any) => (
      <Button
        variant="outlined"
        size="small"
        onClick={() => onClick(row, column)}
      >
        <ShareOutlinedIcon sx={shareIconStyle} />
      </Button>
    ),
  },
];

const dataProvider: { [key: string]: any }[] = [
  { name: "Frozen yogurt", cals: 159, fat: 12.4, carbs: 20.6 },
  { name: "Ice cream sandwich", cals: 120, fat: 22.4, carbs: 10.5 },
  { name: "Eclair", cals: 300, fat: 11.1, carbs: 50.9 },
];

export const DataGrid = () => {
  const handleHeaderClick = (column: any) => {
    console.log(column);
  };

  const handleBodyClick = (row: any, column: any) => {
    console.log(row, column);
  };

  return (
    <Table sx={tableStyle}>
      <TableHead sx={headRowStyle}>
        <TableRow>
          {columns.map((column) => (
            <TableCell
              key={column.key}
              align={column?.align || "center"}
              width={column?.width}
            >
              {column.headerRenderer?.(column, handleHeaderClick) || (
                <Typography variant="body3">{column.title}</Typography>
              )}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {dataProvider.map((row) => (
          <TableRow key={row.name} sx={rowStyle} hover>
            {columns.map((column) => (
              <TableCell
                align={column?.align || "center"}
                width={column?.width}
              >
                {column.cellRenderer?.(row, column, handleBodyClick) || (
                  <Typography variant="body3">{row[column.key]}</Typography>
                )}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
