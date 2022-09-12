/* istanbul ignore file */
import { Directions, getPair } from "@/defi";
import {
  capitalize,
  formatNumber,
  formatPair,
  formatUsdValue,
} from "@/utils/formatters";
import { format } from "date-fns";

export const createDataProvider = (history: any[]) => {
  return history.map((historyEntry) => {
    const pair = getPair(historyEntry.pairId);

    return {
      pair,
      id: pair.id,
      liquidated: historyEntry.liquidated,
      symbol: formatPair(pair.id),
      direction: capitalize(historyEntry.direction),
      directionColor:
        historyEntry.direction === Directions.Long
          ? "alert.lemon"
          : "alert.guava",
      leverage: `${historyEntry.leverage}X`,
      date: format(historyEntry.dateTime, "dd/MM/yyyy"),
      time: format(historyEntry.dateTime, "HH:mm:ss"),

      type: capitalize(historyEntry.type),
      amount: formatNumber(historyEntry.amount, { base: 0 }),
      price: formatUsdValue(historyEntry.price),
      total: formatUsdValue(historyEntry.total),
      fee: formatUsdValue(historyEntry.fee),
      profitAndLoss: formatNumber(historyEntry.unrealizedPnl, {
        productId: pair.productIds[1],
      }),
    };
  });
};
