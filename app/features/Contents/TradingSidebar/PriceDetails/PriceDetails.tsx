import { Box, Typography } from "@mui/material";

import usePriceDetails from "./usePriceDetails";

import { containerStyle, rowStyle } from "./PriceDetails.styles";

export const PriceDetails = () => {
  const dataProvider = usePriceDetails();

  return (
    <Box sx={containerStyle}>
      {dataProvider.map((row) => (
        <Box sx={rowStyle} key={row.label}>
          <Typography variant="inputLabel">{row.label}</Typography>
          <Typography variant="inputLabel">{row.value}</Typography>
        </Box>
      ))}
    </Box>
  );
};
