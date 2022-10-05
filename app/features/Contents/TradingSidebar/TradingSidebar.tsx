/* istanbul ignore file */
import { Box, Button, Divider } from "@mui/material";

import { AccountDetails } from "./AccountDetails";
import { AssetAmount } from "./AssetAmount";
import { DirectionSelector } from "./DirectionSelector";
import { LeverageSelector } from "./LeverageSelector";
import { PriceDetails } from "./PriceDetails";
import { SlippageEditor } from "./SlippageEditor";

import { useStore } from "@/stores/root";
import { capitalize } from "@/utils/formatters";
import {
  containerStyle,
  contentStyle,
  dividerStyle,
  innerContainerStyle,
  scrollContainerStyle,
} from "./TradingSidebar.styles";

import { AlertNotification } from "@/components";
import { getCreatePositionNotifications } from "@/stores/slices/notifications";
import { isTradingSidebarEnabled } from "./TradingSidebar.slice";
import useOpenPosition from "./useOpenPosition";

export const TradingSidebar = () => {
  const { handleOpenPosition, loading } = useOpenPosition();
  const { direction } = useStore((state) => state.tradingSidebar);
  const tradingSidebarEnabled = useStore(isTradingSidebarEnabled);
  const notifications = useStore(getCreatePositionNotifications);

  return (
    <Box sx={containerStyle}>
      <Box sx={scrollContainerStyle}>
        {notifications.visible && (
          <AlertNotification {...notifications} inline />
        )}
        <DirectionSelector />
        <Box sx={innerContainerStyle}>
          <Box sx={contentStyle}>
            <AssetAmount />
            <LeverageSelector />
            <PriceDetails />
            <SlippageEditor />
            <Button
              variant={direction}
              onClick={handleOpenPosition}
              disabled={loading || !tradingSidebarEnabled}
            >
              Confirm {capitalize(direction)}
            </Button>
          </Box>
          <Divider sx={dividerStyle} />
          <AccountDetails />
        </Box>
      </Box>
    </Box>
  );
};
