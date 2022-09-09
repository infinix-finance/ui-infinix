import { Button } from "@mui/material";
import { Meta, Story } from "@storybook/react";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";

import { DataGrid } from "./DataGrid";

import {
  ColumnProps,
  DataGridProps,
  HeaderClickFunc,
  RowClickFunc,
  RowProps,
} from "./DataGrid.types";

export default {
  title: "molecules/DataGrid",
  component: DataGrid,
} as Meta<DataGridProps>;

const columns: ColumnProps[] = [
  { title: "Dessert (100g serving)", key: "name", align: "left" },
  { title: "Calories", key: "cals", align: "left" },
  { title: "Fat (g)", key: "fat", align: "center" },
  { title: "Carbs (g)", key: "carbs", align: "right" },
];

const additionalColumns: ColumnProps[] = [
  {
    title: "",
    key: "close",
    align: "left",
    width: "1px",
    headerRenderer: (column: ColumnProps, onClick: HeaderClickFunc) => (
      <Button variant="contained" size="small" onClick={() => onClick(column)}>
        Close All
      </Button>
    ),
    cellRenderer: (
      row: RowProps,
      column: ColumnProps,
      onClick: RowClickFunc
    ) => (
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
    cellRenderer: (
      row: RowProps,
      column: ColumnProps,
      onClick: RowClickFunc
    ) => (
      <Button
        variant="outlined"
        size="small"
        onClick={() => onClick(row, column)}
      >
        <ShareOutlinedIcon sx={{ width: "0.875rem", height: "0.875rem" }} />
      </Button>
    ),
  },
];

const dataProvider: RowProps[] = [
  { name: "Frozen yogurt", cals: 159, fat: 12.4, carbs: 20.6 },
  { name: "Ice cream sandwich", cals: 120, fat: 22.4, carbs: 10.5 },
  { name: "Eclair", cals: 300, fat: 11.1, carbs: 50.9 },
];

const Template: Story<DataGridProps> = (args) => {
  return <DataGrid {...args} />;
};

export const PlainGrid = Template.bind({});
PlainGrid.args = {
  dataProvider,
  columns,
};

export const InvisibleNameColumn = Template.bind({});
InvisibleNameColumn.args = {
  dataProvider,
  columns: [{ ...columns[0], invisible: true }, ...columns.slice(1)],
};

export const EmptyGrid = Template.bind({});
EmptyGrid.args = {
  dataProvider: [],
  columns: columns,
};

export const CustomChild = Template.bind({});
CustomChild.args = {
  dataProvider,
  columns: columns,
  children: (
    <>
      <Button variant="contained">Custom child</Button>
    </>
  ),
};

export const GridWithRenderers = Template.bind({});
GridWithRenderers.args = {
  dataProvider,
  columns: [...columns, ...additionalColumns],
};
