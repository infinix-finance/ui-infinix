import { Box, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { InstrumentPanel } from "./InstrumentPanel";

import { useStore } from "@/stores/root";
import { useLayout } from "@/hooks/responsive";
import { getAccountDetails } from "../TradingSidebar.slice";

import {
  containerStyle,
  iconStyle,
  rowStyle,
  valuesStyle,
} from "./AccountDetails.styles";

export const AccountDetails = () => {
  const { data, isBalanceSet, freeMargin } = useStore(getAccountDetails);
  const { isSmallDesktop } = useLayout();

  return (
    <Box sx={containerStyle}>
      {data.map((row) => {
        const shouldShowFirstValue =
          !row.value2 || (row.value2 && !isSmallDesktop);
        const shouldShowSecondValue = !!row.value2;

        return (
          <Box sx={rowStyle(isBalanceSet)} key={row.label}>
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
