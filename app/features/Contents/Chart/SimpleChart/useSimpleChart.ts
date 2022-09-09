import { createChart } from "lightweight-charts";
import { RefObject, useEffect } from "react";
import { chartConfig, lineSeriesConfig } from "./config";

export default function useSimpleChart(
  data: any[],
  ref: RefObject<HTMLDivElement>
) {
  useEffect(() => {
    const handleResize = () => {
      chart.applyOptions({
        width: ref.current!.clientWidth,
        height: ref.current!.clientHeight,
      });
    };

    const chart = createChart(ref.current!, chartConfig);

    handleResize();

    const newSeries = chart.addLineSeries(lineSeriesConfig);
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
  }, [data]);
}
