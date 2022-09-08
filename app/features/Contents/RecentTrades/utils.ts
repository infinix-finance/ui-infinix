/* istanbul ignore file */
import { format } from "date-fns";

import { Directions } from "@/defi";
import { capitalize, formatNumber } from "@/utils/formatters";

export const createDataProvider = (recentTrades: any[]) => {
  return recentTrades.map((trade) => {
    return {
      id: Math.random(),
      price: formatNumber(trade.price),
      direction: capitalize(trade.direction),
      directionColor:
        trade.direction === Directions.Long ? "alert.lemon" : "alert.guava",
      size: formatNumber(trade.size),
      time: format(trade.dateTime, "HH:mm:ss"),
    };
  });
};
