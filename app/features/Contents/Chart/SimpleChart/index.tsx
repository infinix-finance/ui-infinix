import dynamic from "next/dynamic";

// This is mandatory as we must skip Next.js SSR
// since there is no canvas in JS BE environments
const SimpleChart = dynamic(
  () => import("@/features/Contents/Chart/SimpleChart/SimpleChart"),
  { ssr: false }
);

export default SimpleChart;
