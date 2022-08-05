import { Box } from "@mui/material";

import { containerStyle, contentStyle } from "./TradingSidebar.styles";

export const TradingSidebar = () => {
  return (
    <Box sx={containerStyle}>
      <Box sx={contentStyle}>
        {Array(37)
          .fill("")
          .map(() => (
            <div>TradingSidebar</div>
          ))}
      </Box>
    </Box>
  );
};
