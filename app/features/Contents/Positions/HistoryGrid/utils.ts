/* istanbul ignore file */
import { format, secondsToMilliseconds } from "date-fns";

import {
  Directions,
  getPair,
  mapOriginalPositionStatus,
  OriginalPositionChangeStatuses,
} from "@/defi";
import { HistoryPositionEvent } from "@/stores/slices/api/userPositions";
import {
  capitalize,
  formatNumber,
  formatPair,
  formatUsdValue,
  toTokenUnit,
} from "@/utils/formatters";

export const createDataProvider = (history: HistoryPositionEvent[]) => {
  return history.map((historyEntry) => {
    const pair = getPair(historyEntry.pairId);
    const size = toTokenUnit(historyEntry.size!);
    const direction = size.lt(0) ? Directions.Short : Directions.Long;
    const leverage = toTokenUnit(historyEntry.leverage);
    const entryPrice = toTokenUnit(historyEntry.entryPrice!);
    const totalPrice = entryPrice.multipliedBy(size).abs();
    const fee = toTokenUnit(historyEntry.fee!);
    const realizedPnl = toTokenUnit(historyEntry.realizedPnl!);
    const timestamp = secondsToMilliseconds(historyEntry.timestamp);
    const type = mapOriginalPositionStatus(
      historyEntry.type as OriginalPositionChangeStatuses
    );

    return {
      pair,
      id: timestamp + pair.id,
      liquidated: "->",
      symbol: formatPair(pair.id),
      direction: capitalize(direction),
      directionColor:
        direction === Directions.Long ? "alert.lemon" : "alert.guava",
      leverage: `${leverage}X`,
      date: format(timestamp, "dd/MM/yyyy"),
      time: format(timestamp, "HH:mm:ss"),

      type: capitalize(type),
      amount: formatNumber(size, { base: 2 }),
      price: formatUsdValue(entryPrice),
      total: formatUsdValue(totalPrice),
      fee: formatUsdValue(fee),
      profitAndLoss: formatNumber(realizedPnl, {
        productId: pair.productIds[1],
      }),
    };
  });
};
