/* istanbul ignore file */
import { Box } from "@mui/material";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import { TabItem, Tabs } from "@/components";

import { containerStyle } from "./Positions.styles";
import { useState } from "react";
import { DataGrid } from "./DataGrid";

const tabItems: TabItem[] = [
  {
    label: "Positions",
    icon: <PlaylistAddIcon />,
  },
  {
    label: "History",
    icon: <AccessTimeIcon />,
  },
];

export const Positions = () => {
  const [selected, setSelected] = useState(0);

  const handleChange = (value: number) => {
    setSelected(value);
  };

  return (
    <Box sx={containerStyle}>
      <Tabs
        value={selected}
        items={tabItems}
        variant="standard"
        onChange={handleChange}
      />
      <DataGrid />
    </Box>
  );
};
