import { LineStyle } from "lightweight-charts";

export const chartConfig = {
  layout: {
    backgroundColor: "transparent",
    textColor: "#8186AE",
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
};

export const lineSeriesConfig = {
  color: "#FFFFFF",
  lineWidth: 2,
} as const;
