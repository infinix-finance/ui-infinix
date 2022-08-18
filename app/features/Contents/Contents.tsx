/* istanbul ignore file */
import { Box } from "@mui/material";

import { TopBar } from "./TopBar";
import { TradingSidebar } from "./TradingSidebar";
import { Chart } from "./Chart";
import { RecentTrades } from "./RecentTrades";
import { Positions } from "./Positions";
import { ResolutionGuard } from "./ResolutionGuard";

import {
  containerStyle,
  mainContentStyle,
  midContainerStyle,
} from "./Contents.styles";
import { useLayout } from "@/hooks/responsive";

export const Contents = () => {
  const { unsupportedResolution } = useLayout();

  return (
    <Box sx={containerStyle(unsupportedResolution)}>
      <ResolutionGuard />
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
