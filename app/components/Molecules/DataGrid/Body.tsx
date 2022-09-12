import { TableBody, TableCell, TableRow, Typography } from "@mui/material";
import { ColumnProps, RowClickFunc, RowProps } from "./DataGrid.types";

import { rowStyle } from "./DataGrid.styles";

export interface BodyProps {
  columns: ColumnProps[];
  dataProvider: RowProps[];
  onClick: RowClickFunc;
}

export const Body = ({ columns, dataProvider, onClick }: BodyProps) => (
  <TableBody>
    {dataProvider.map((row) => (
      <TableRow key={`row-${row.id}`} sx={rowStyle} hover>
        {columns.map((column) => (
          <TableCell key={`cell-${row.id}-${column.key}`} width={column?.width}>
            {column.cellRenderer?.(row, column, onClick) || (
              <Typography
                variant="body3"
                justifyContent={column?.align || "left"}
              >
                {row[column.key]}
              </Typography>
            )}
          </TableCell>
        ))}
      </TableRow>
    ))}
  </TableBody>
);
