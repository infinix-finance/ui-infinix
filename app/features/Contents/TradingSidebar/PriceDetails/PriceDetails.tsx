import { Box, Typography } from "@mui/material";

import usePriceDetails from "./usePriceDetails";

import { containerStyle, labelStyle, rowStyle } from "./PriceDetails.styles";

export const PriceDetails = () => {
  const { dataProvider, tradingSidebarEnabled } = usePriceDetails();

  return (
    <Box sx={containerStyle}>
      {dataProvider.map((row) => (
        <Box sx={rowStyle} key={row.label}>
          <Typography
            sx={labelStyle(tradingSidebarEnabled)}
            variant="inputLabel"
          >
            {row.label}
          </Typography>
          <Typography
            sx={labelStyle(tradingSidebarEnabled)}
            variant="inputLabel"
          >
            {row.value}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};
