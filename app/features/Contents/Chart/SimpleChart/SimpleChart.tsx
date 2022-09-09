/* istanbul ignore file */
import { Box } from "@mui/material";

import { Header } from "./Header";

import {
  containerStyle,
  chartContainerStyle,
  chartStyle,
} from "./SimpleChart.styles";
import useSimpleChart from "./useSimpleChart";

export interface SimpleChartProps {
  initialData: any[];
  update: any[];
}

export default function SimpleChart({ initialData, update }: SimpleChartProps) {
  const { chartContainerRef } = useSimpleChart(initialData, update);

  return (
    <Box sx={containerStyle}>
      <Header />
      <Box sx={chartContainerStyle}>
        <Box ref={chartContainerRef} sx={chartStyle} />
      </Box>
    </Box>
  );
}
