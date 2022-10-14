/* istanbul ignore file */
import { createChart, IChartApi, ISeriesApi, Time } from "lightweight-charts";
import { useEffect, useRef } from "react";
import create from "zustand";

import { chartConfig, lineSeriesConfig } from "./config";

interface ChartStore {
  chart: IChartApi | null;
  lineSeries: ISeriesApi<"Line"> | null;
  setChart: (instance: IChartApi | null) => void;
  setLineSeries: (instance: ISeriesApi<"Line"> | null) => void;
}

const useChartStore = create<ChartStore>((set) => ({
  chart: null,
  lineSeries: null,
  setChart: (instance: IChartApi | null) => set(() => ({ chart: instance })),
  setLineSeries: (instance: ISeriesApi<"Line"> | null) =>
    set(() => ({ lineSeries: instance })),
}));

export default function useSimpleChart(initialData: any[], update: any[]) {
  const { chart, lineSeries, setChart, setLineSeries } = useChartStore();
  const chartContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!initialData.length || !chartContainerRef.current) return;

    const chartInstance = createChart(chartContainerRef.current!, chartConfig);
    const lineSeriesInstance = chartInstance.addLineSeries(lineSeriesConfig);
    lineSeriesInstance.setData(initialData);
    const to = initialData[initialData.length - 1];

    chartInstance.timeScale().setVisibleRange({
      from: ((to.time as number) - 20 * 24 * 60 * 60) as Time, // -20 days from latest tick
      to: to.time as Time,
    });

    setChart(chartInstance);
    setLineSeries(lineSeriesInstance);

    const handleResize = () => {
      chartInstance!.applyOptions({
        width: chartContainerRef.current!.clientWidth,
        height: chartContainerRef.current!.clientHeight,
      });
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chartInstance.remove();
    };
  }, [initialData]);

  useEffect(() => {
    if (!chart || !initialData.length || !update.length) return;

    update.forEach((tickData) => lineSeries?.update(tickData));
  }, [initialData, update]);

  return {
    chartContainerRef,
  };
}
