/* istanbul ignore file */
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import HorizontalSplitOutlinedIcon from "@mui/icons-material/HorizontalSplitOutlined";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import RectangleOutlinedIcon from "@mui/icons-material/RectangleOutlined";
import TableRowsOutlinedIcon from "@mui/icons-material/TableRowsOutlined";
import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";

import { Label, TabItem, Tabs } from "@/components";

import { HistoryGrid } from "./HistoryGrid";
import {
  containerStyle,
  headingStyle,
  rightGroupStyle,
  tabsStyle,
  toggleButtonStyle,
} from "./Positions.styles";
import { PositionsGrid } from "./PositionsGrid";

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

enum Sizes {
  small = "small",
  medium = "medium",
  large = "large",
}

export const Positions = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedButton, setSelectedButton] = useState(Sizes.small);

  const handleTabChange = (value: number) => {
    setSelectedTab(value);
  };

  const handleSizeToggleChange = (
    event: React.MouseEvent<HTMLElement>,
    value: Sizes
  ) => {
    setSelectedButton(value);
  };

  return (
    <Box sx={containerStyle}>
      <Box sx={headingStyle}>
        <Tabs
          sx={tabsStyle}
          value={selectedTab}
          items={tabItems}
          variant="standard"
          onChange={handleTabChange}
        />
        <Box sx={rightGroupStyle}>
          <Label
            label="Closing position is subject to slippage"
            TooltipProps={{
              title: "",
              children: <></>,
            }}
          />
          <ToggleButtonGroup
            value={selectedButton}
            color="primary"
            exclusive
            onChange={handleSizeToggleChange}
          >
            <ToggleButton sx={toggleButtonStyle} value={Sizes.small}>
              <TableRowsOutlinedIcon />
            </ToggleButton>
            <ToggleButton sx={toggleButtonStyle} value={Sizes.medium}>
              <HorizontalSplitOutlinedIcon />
            </ToggleButton>
            <ToggleButton sx={toggleButtonStyle} value={Sizes.large}>
              <RectangleOutlinedIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Box>
      {selectedTab === 0 && <PositionsGrid />}
      {selectedTab === 1 && <HistoryGrid />}
    </Box>
  );
};
