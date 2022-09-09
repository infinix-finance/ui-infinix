/* istanbul ignore file */
import { Box } from "@mui/material";

import { containerStyle } from "./Chart.styles";
import SimpleChart from "./SimpleChart";

import useChart from "./useChart";

export const Chart = () => {
  const { initialData, update } = useChart();

  return (
    <Box sx={containerStyle}>
      <SimpleChart initialData={initialData} update={update} />
    </Box>
  );
};
