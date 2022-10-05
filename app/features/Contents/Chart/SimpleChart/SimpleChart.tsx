/* istanbul ignore file */
import { Box, CircularProgress } from "@mui/material";

import { Header, HeaderProps } from "./Header";
import useSimpleChart from "./useSimpleChart";

import {
  chartContainerStyle,
  chartStyle,
  containerStyle,
  progressStyle,
} from "./SimpleChart.styles";

export interface SimpleChartProps extends HeaderProps {
  initialData: any[];
  update?: any[];
  loading: boolean;
}

export default function SimpleChart({
  initialData,
  loading,
  update = [],
  ...rest
}: SimpleChartProps) {
  const { chartContainerRef } = useSimpleChart(initialData, update);

  return (
    <Box sx={containerStyle}>
      <Header {...rest} />
      {loading && (
        <Box sx={progressStyle}>
          <CircularProgress />
        </Box>
      )}
      {!loading && (
        <Box sx={chartContainerStyle}>
          <Box ref={chartContainerRef} sx={chartStyle} />
        </Box>
      )}
    </Box>
  );
}
