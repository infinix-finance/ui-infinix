import React from "react";

export enum TextAlignments {
  left = "left",
  center = "center",
  right = "right",
}

export enum VerticalAlignments {
  top = "top",
  center = "center",
  bottom = "bottom",
}

export interface RowProps {
  [key: string]: any;
}

export interface DataProviderProps {
  id: string;
  [key: string]: any;
}

export type HeaderClickFunc = (column: ColumnProps) => void;

export type RowClickFunc = (row: RowProps, column: ColumnProps) => void;

export interface ColumnProps {
  key: string;
  title: string;
  width?: string;
  align?: keyof typeof TextAlignments;
  invisible?: boolean;
  cellRenderer?: (
    row: RowProps,
    column: ColumnProps,
    onClick: RowClickFunc
  ) => React.ReactElement;
  headerRenderer?: (
    column: ColumnProps,
    onClick: HeaderClickFunc
  ) => React.ReactElement;
}

export interface DataGridProps {
  columns: ColumnProps[];
  dataProvider: RowProps[];
  hover?: boolean;
  children?: React.ReactNode;
  onHeaderClick?: HeaderClickFunc;
  onRowClick?: RowClickFunc;
}
