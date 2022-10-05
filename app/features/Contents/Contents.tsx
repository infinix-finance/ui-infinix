/* istanbul ignore file */
import { Box } from "@mui/material";

import { AlertNotification } from "@/components";
import { useStore } from "@/stores/root";
import { Chart } from "./Chart";
import { Positions } from "./Positions";
import { RecentTrades } from "./RecentTrades";
import { ResolutionGuard } from "./ResolutionGuard";
import { TopBar } from "./TopBar";
import { TradingSidebar } from "./TradingSidebar";

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
      <Box sx={subContainerStyle}>
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
