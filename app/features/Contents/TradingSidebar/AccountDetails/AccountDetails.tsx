import { Box, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { InstrumentPanel } from "./InstrumentPanel";

import { useStore } from "@/stores/root";
import { getAccountDetails } from "../TradingSidebar.slice";

import {
  containerStyle,
  iconStyle,
  rowStyle,
  valuesStyle,
} from "./AccountDetails.styles";

export const AccountDetails = () => {
  const { data, freeMargin } = useStore(getAccountDetails);

  return (
    <Box sx={containerStyle}>
      {data.map((row) => (
        <Box sx={rowStyle} key={row.label}>
          <Typography variant="body2">{row.label}</Typography>
          <Box sx={valuesStyle}>
            {row.value && <Typography variant="body2">{row.value}</Typography>}
            {row.value2 && (
              <>
                <ArrowForwardIcon sx={iconStyle} viewBox="4 4 16 16" />
                <Typography variant="body2">{row.value2}</Typography>
              </>
            )}
          </Box>
        </Box>
      ))}
      <InstrumentPanel percentage={freeMargin} />
    </Box>
  );
};
