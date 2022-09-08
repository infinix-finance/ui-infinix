/* istanbul ignore file */
import { Directions } from "@/defi";
import BigNumber from "bignumber.js";
import { createDataProvider } from "./utils";

const recentTrades = new Array(20).fill(null).map((_, idx) => ({
  direction: idx % 2 === 0 ? Directions.Long : Directions.Short,
  price: new BigNumber(
    [
      12.33, 125.25551, 6550.1154, 15.67, 93.1223, 2212.356, 1.2333, 0.1234,
      21000.12, 1,
    ][idx % 10]
  ),
  dateTime: new Date("2022-09-06 12:56:22"),
  size: new BigNumber(
    [
      0.123, 0.4444, 1.33, 2.242, 4.1223, 35000, 1234011, 3321, 12.012,
      11.111111,
    ][idx % 10]
  ),
}));

export default function useRecentTrades() {
  const dataProvider = createDataProvider(recentTrades).slice(0, 15);

  return {
    dataProvider,
  };
}
