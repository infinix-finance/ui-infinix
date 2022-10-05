import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Typography } from "@mui/material";

import { InstrumentPanel } from "./InstrumentPanel";

import { useLayout } from "@/hooks/responsive";
import { useStore } from "@/stores/root";
import {
  getAccountDetails,
  isTradingSidebarEnabled,
} from "../TradingSidebar.slice";

import {
  containerStyle,
  iconStyle,
  rowStyle,
  valuesStyle,
} from "./AccountDetails.styles";

export const AccountDetails = () => {
  const { data, freeMargin } = useStore(getAccountDetails);
  const tradingSidebarEnabled = useStore(isTradingSidebarEnabled);
  const { isSmallDesktop } = useLayout();

  return (
    <Box sx={containerStyle}>
      {data.map((row) => {
        const shouldShowFirstValue =
          !row.value2 || (row.value2 && !isSmallDesktop);
        const shouldShowSecondValue = !!row.value2;

        return (
          <Box sx={rowStyle(tradingSidebarEnabled)} key={row.label}>
            <Typography variant="body2">{row.label}</Typography>
            <Box sx={valuesStyle}>
              {shouldShowFirstValue && (
                <Typography variant="body2">{row.value}</Typography>
              )}
              {shouldShowFirstValue && shouldShowSecondValue && (
                <ArrowForwardIcon sx={iconStyle} viewBox="4 4 16 16" />
              )}
              {shouldShowSecondValue && (
                <Typography variant="body2">{row.value2}</Typography>
              )}
            </Box>
          </Box>
        );
      })}
      <InstrumentPanel percentage={freeMargin} />
    </Box>
  );
};
