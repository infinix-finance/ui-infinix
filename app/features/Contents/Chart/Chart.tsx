/* istanbul ignore file */
import { Box } from "@mui/material";

import { containerStyle } from "./Chart.styles";
import SimpleChart from "./SimpleChart";

export const Chart = () => {
  return (
    <Box sx={containerStyle}>
      <SimpleChart />
    </Box>
  );
};
