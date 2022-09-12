import { TableCell, TableHead, TableRow, Typography } from "@mui/material";
import { headRowStyle } from "./DataGrid.styles";

import { ColumnProps, HeaderClickFunc } from "./DataGrid.types";

export interface HeaderProps {
  columns: ColumnProps[];
  onClick: HeaderClickFunc;
}

export const Header = ({ columns, onClick }: HeaderProps) => (
  <TableHead sx={headRowStyle}>
    <TableRow>
      {columns.map((column) => (
        <TableCell key={`col-${column.key}`} width={column?.width}>
          {column.headerRenderer?.(column, onClick) || (
            <Typography
              variant="body3"
              justifyContent={column?.align || "left"}
            >
              {column.title}
            </Typography>
          )}
        </TableCell>
      ))}
    </TableRow>
  </TableHead>
);
