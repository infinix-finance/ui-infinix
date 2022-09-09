import dynamic from "next/dynamic";

const SimpleChart = dynamic(
  () => import("@/features/Contents/Chart/SimpleChart/SimpleChart"),
  { ssr: false }
);

export default SimpleChart;
