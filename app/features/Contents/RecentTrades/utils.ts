/* istanbul ignore file */
import { format, secondsToMilliseconds } from "date-fns";

import { Directions } from "@/defi";
import { capitalize, formatNumber, toTokenUnit } from "@/utils/formatters";
import { PositionEvent } from "@/types/api";

export const createDataProvider = (recentTrades: PositionEvent[]) => {
  return recentTrades.map(({ size, price, timestamp }) => {
    const convertedSize = toTokenUnit(size || 0);
    const convertedPrice = toTokenUnit(price || 0);
    const convertedDateTime = new Date(secondsToMilliseconds(timestamp));
    const direction = convertedSize.lte(0) ? Directions.Short : Directions.Long;

    return {
      id: Math.random(),
      price: formatNumber(convertedPrice),
      direction: capitalize(direction),
      directionColor:
        direction === Directions.Long ? "alert.lemon" : "alert.guava",
      size: formatNumber(convertedSize.abs()),
      time: format(convertedDateTime, "HH:mm:ss"),
    };
  });
};
