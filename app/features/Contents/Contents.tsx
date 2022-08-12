import { Box } from "@mui/material";

import { TopBar } from "./TopBar";
import { TradingSidebar } from "./TradingSidebar";

import {
  containerStyle,
  mainContentStyle,
  midContainerStyle,
} from "./Contents.styles";
import { Chart } from "./Chart";
import { RecentTrades } from "./RecentTrades";
import { Positions } from "./Positions";

export const Contents = () => {
  return (
    <Box sx={containerStyle}>
      <Box sx={mainContentStyle}>
        <TopBar />
        <Box sx={midContainerStyle}>
          <Chart />
          <RecentTrades />
        </Box>
        <Positions />
      </Box>
      <TradingSidebar />
    </Box>
  );
};
