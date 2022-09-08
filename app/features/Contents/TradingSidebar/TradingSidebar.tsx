/* istanbul ignore file */
import { Box, Button, Typography } from "@mui/material";

import { useClearingHouse } from "@/hooks/contracts";

import {
  containerStyle,
  contentStyle,
  titleStyle,
} from "./TradingSidebar.styles";

export const TradingSidebar = () => {
  const { payFunding } = useClearingHouse();

  return (
    <Box sx={containerStyle}>
      <Box sx={contentStyle}>
        <Typography sx={titleStyle}>TradingSidebar</Typography>
        <Button variant="outlined" onClick={payFunding}>
          Pay Funding
        </Button>
      </Box>
    </Box>
  );
};
