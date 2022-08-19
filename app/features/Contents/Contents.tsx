/* istanbul ignore file */
import { Box } from "@mui/material";

import { TopBar } from "./TopBar";
import { TradingSidebar } from "./TradingSidebar";
import { Chart } from "./Chart";
import { RecentTrades } from "./RecentTrades";
import { Positions } from "./Positions";
import { ResolutionGuard } from "./ResolutionGuard";
import { useLayout } from "@/hooks/responsive";
import { useStore } from "@/stores/root";
import { AlertNotification } from "@/components";

import {
  containerStyle,
  mainContentStyle,
  midContainerStyle,
  notificationStyle,
  subContainerStyle,
} from "./Contents.styles";

export const Contents = () => {
  const { top: notification, hideTopNotification } = useStore(
    (store) => store.notifications
  );
  const { unsupportedResolution } = useLayout();

  return (
    <Box sx={containerStyle}>
      {notification.visible && (
        <AlertNotification
          sx={notificationStyle}
          {...notification}
          onClose={hideTopNotification}
          inline
        />
      )}
      <ResolutionGuard />
      <Box sx={subContainerStyle(unsupportedResolution)}>
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
    </Box>
  );
};
