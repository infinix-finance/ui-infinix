/* istanbul ignore file */
import { Box, Button, Typography } from "@mui/material";

import {
  containerStyle,
  contentStyle,
  titleStyle,
} from "./TradingSidebar.styles";

export const TradingSidebar = () => {
  return (
    <Box sx={containerStyle}>
      <Box sx={contentStyle}>
        <Typography sx={titleStyle}>TradingSidebar</Typography>
        <Button variant="outlined">Open Position</Button>
      </Box>
    </Box>
  );
};
