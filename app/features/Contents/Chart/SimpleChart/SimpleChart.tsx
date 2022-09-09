import { useEffect, useRef } from "react";
import { createChart, ColorType, LineStyle } from "lightweight-charts";
import { Box } from "@mui/material";
import { chartStyle, containerStyle, headerStyle } from "./SimpleChart.styles";
import { Header } from "./Header";

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

export const ChartComponent = (props: any) => {
  const {
    data,
    colors: {
      backgroundColor = "white",
      lineColor = "#2962FF",
      textColor = "black",
      areaTopColor = "#2962FF",
      areaBottomColor = "rgba(41, 98, 255, 0.28)",
    },
    padding = 16,
  } = {
    data: initialData,
    colors: {
      backgroundColor: "transparent",
      lineColor: "#FFFFFFFF",
      textColor: "#8186AE",
      areaTopColor: "#ff0000",
      areaBottomColor: "rgba(41, 98, 255, 0.28)",
    },
    padding: 16,
  };
  const chartContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      chart.applyOptions({
        width: chartContainerRef.current!.clientWidth,
        height: chartContainerRef.current!.clientHeight,
      });
    };

    const chart = createChart(chartContainerRef.current!, {
      layout: {
        backgroundColor,
        textColor: textColor,
        fontFamily: "Sora",
      },
      grid: {
        vertLines: {
          color: "#8186AE50",
          style: LineStyle.Dashed,
        },
        horzLines: {
          color: "#8186AE50",
          style: LineStyle.Dashed,
        },
      },
      watermark: {
        color: "red",
        fontStyle: "normal",
      },
      width: chartContainerRef.current!.clientWidth,
      height: chartContainerRef.current!.clientHeight,
    });

    const newSeries = chart.addLineSeries({
      color: lineColor,
      lineWidth: 2,
    });
    newSeries.setData(data);
    chart.timeScale().setVisibleRange({
      from: "2018-12-19",
      to: "2018-12-31",
    });

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);

      chart.remove();
    };
  }, [
    data,
    backgroundColor,
    lineColor,
    textColor,
    areaTopColor,
    areaBottomColor,
  ]);

  return (
    <Box sx={containerStyle}>
      <Box sx={headerStyle}>
        <Header />
      </Box>
      <Box sx={chartStyle}>
        <Box
          ref={chartContainerRef}
          sx={{
            width: "100%",
            height: "100%",
            position: "absolute",
          }}
        />
      </Box>
    </Box>
  );
};

export default function SimpleChart(props: any) {
  return <ChartComponent {...props} data={initialData}></ChartComponent>;
}
