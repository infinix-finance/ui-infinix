/* istanbul ignore file */
import { Directions, getPair } from "@/defi";
import {
  capitalize,
  formatNumber,
  formatPair,
  formatPercentage,
  formatUsdValue,
} from "@/utils/formatters";

export const createDataProvider = (positions: any[]) => {
  return positions.map((position) => {
    const pair = getPair(position.pairId);

    return {
      pair,
      id: pair.id,
      symbol: formatPair(pair.id),
      direction: capitalize(position.direction),
      directionColor:
        position.direction === Directions.Long ? "alert.lemon" : "alert.guava",
      leverage: `${position.leverage}X`,
      size: formatNumber(position.size, {
        productId: pair.productIds[1],
      }),
      entryPrice: formatUsdValue(position.entryPrice),
      markPrice: formatUsdValue(position.markPrice),
      marginRatio: formatPercentage(position.marginRatio),
      liquidationPrice: formatUsdValue(position.liquidationPrice),
      profitAndLoss: formatNumber(position.unrealizedPnl, {
        productId: pair.productIds[1],
      }),
      isInProfit: position.unrealizedPnl.isGreaterThan(0),
    };
  });
};
