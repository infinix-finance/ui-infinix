import { Table, TableContainer } from "@mui/material";
import { Body } from "./Body";

import { DataGridProps } from "./DataGrid.types";
import { Header } from "./Header";

import { tableStyle } from "./DataGrid.styles";
import { PlaceHolder } from "./Placeholder";

export const DataGrid = ({
  columns,
  dataProvider,
  hover = true,
  showPlaceholder = true,
  children = null,
  onHeaderClick = () => {},
  onRowClick = () => {},
}: DataGridProps) => {
  const visibleColumns = columns.filter((column) => !column?.invisible);
  const isPopulated = Boolean(dataProvider.length);
  const shouldShowPlaceholder = (showPlaceholder && !isPopulated) || children;
  const shouldShowBody = isPopulated && !children;

  return (
    <TableContainer>
      <Table sx={tableStyle} stickyHeader>
        <Header columns={visibleColumns} onClick={onHeaderClick} />
        {shouldShowPlaceholder && (
          <PlaceHolder columns={visibleColumns}>{children}</PlaceHolder>
        )}
        {shouldShowBody && (
          <Body
            columns={visibleColumns}
            dataProvider={dataProvider}
            hover={hover}
            onClick={onRowClick}
          />
        )}
      </Table>
    </TableContainer>
  );
};
