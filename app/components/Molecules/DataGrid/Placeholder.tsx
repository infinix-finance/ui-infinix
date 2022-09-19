import { Box, TableBody, TableCell, TableRow, Typography } from "@mui/material";
import Image from "next/image";

import { contentStyle, emptyBodyStyle } from "./DataGrid.styles";
import { ColumnProps } from "./DataGrid.types";

export interface PlaceholderProps {
  columns: ColumnProps[];
  children?: React.ReactNode;
}

export const PlaceHolder = ({ columns, children = null }: PlaceholderProps) => (
  <TableBody>
    <TableRow>
      <TableCell sx={emptyBodyStyle} colSpan={columns.length}>
        <Box sx={contentStyle}>
          {children || (
            <>
              <Image
                src="/static/candlestick.svg"
                alt="No transactions"
                width={64}
                height={64}
              />
              <Typography variant="body2" color="secondary.graishLavender">
                You do not have any transactions yet.
              </Typography>
            </>
          )}
        </Box>
      </TableCell>
    </TableRow>
  </TableBody>
);
