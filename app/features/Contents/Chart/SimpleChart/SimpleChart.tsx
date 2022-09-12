/* istanbul ignore file */
import { Box } from "@mui/material";

import { Header, HeaderProps } from "./Header";
import useSimpleChart from "./useSimpleChart";

import {
  containerStyle,
  chartContainerStyle,
  chartStyle,
} from "./SimpleChart.styles";

export interface SimpleChartProps extends HeaderProps {
  initialData: any[];
  update?: any[];
}

export default function SimpleChart({
  initialData,
  update = [],
  ...rest
}: SimpleChartProps) {
  const { chartContainerRef } = useSimpleChart(initialData, update);

  return (
    <Box sx={containerStyle}>
      <Header {...rest} />
      <Box sx={chartContainerStyle}>
        <Box ref={chartContainerRef} sx={chartStyle} />
      </Box>
    </Box>
  );
}
