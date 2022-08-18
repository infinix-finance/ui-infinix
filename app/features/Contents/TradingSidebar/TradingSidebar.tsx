/* istanbul ignore file */
import { Box } from "@mui/material";

import { containerStyle, contentStyle } from "./TradingSidebar.styles";

export const TradingSidebar = () => {
  return (
    <Box sx={containerStyle}>
      <Box sx={contentStyle}>TradingSidebar</Box>
    </Box>
  );
};
