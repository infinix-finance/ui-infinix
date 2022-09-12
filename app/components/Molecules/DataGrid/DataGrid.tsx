import { Table } from "@mui/material";
import { Body } from "./Body";

import { DataGridProps } from "./DataGrid.types";
import { Header } from "./Header";

import { tableStyle } from "./DataGrid.styles";
import { PlaceHolder } from "./Placeholder";

export const DataGrid = ({
  columns,
  dataProvider,
  children = null,
  onHeaderClick = () => {},
  onRowClick = () => {},
}: DataGridProps) => {
  const visibleColumns = columns.filter((column) => !column?.invisible);
  const isPopulated = Boolean(dataProvider.length);

  return (
    <Table sx={tableStyle}>
      <Header columns={visibleColumns} onClick={onHeaderClick} />
      {(!isPopulated || children) && (
        <PlaceHolder columns={visibleColumns}>{children}</PlaceHolder>
      )}
      {isPopulated && !children && (
        <Body
          columns={visibleColumns}
          dataProvider={dataProvider}
          onClick={onRowClick}
        />
      )}
    </Table>
  );
};
