import { useRef } from "react";
import { Box } from "@mui/material";

import {
  containerStyle,
  chartContainerStyle,
  chartStyle,
} from "./SimpleChart.styles";
import { Header } from "./Header";
import useSimpleChart from "./useSimpleChart";

const initialData = [
  { time: "2018-12-14", value: 12.51 },
  { time: "2018-12-15", value: 14.51 },
  { time: "2018-12-16", value: 13.51 },
  { time: "2018-12-17", value: 15.51 },
  { time: "2018-12-18", value: 18.51 },
  { time: "2018-12-19", value: 20.51 },
  { time: "2018-12-20", value: 31.51 },
  { time: "2018-12-21", value: 32.51 },
  { time: "2018-12-22", value: 32.51 },
  { time: "2018-12-23", value: 31.11 },
  { time: "2018-12-24", value: 27.02 },
  { time: "2018-12-25", value: 27.32 },
  { time: "2018-12-26", value: 25.17 },
  { time: "2018-12-27", value: 28.89 },
  { time: "2018-12-28", value: 25.46 },
  { time: "2018-12-29", value: 23.92 },
  { time: "2018-12-30", value: 22.68 },
  { time: "2018-12-31", value: 22.67 },
];

export interface SimpleChartProps {
  data: any[];
}

export default function SimpleChart({ data = initialData }: SimpleChartProps) {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  useSimpleChart(data, chartContainerRef);

  return (
    <Box sx={containerStyle}>
      <Header />
      <Box sx={chartContainerStyle}>
        <Box ref={chartContainerRef} sx={chartStyle} />
      </Box>
    </Box>
  );
}
