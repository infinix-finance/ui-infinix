/* istanbul ignore file */
import { Directions, getPair, PairId } from "@/defi";
import { PositionData } from "@/types/api";
import {
  capitalize,
  formatNumber,
  formatPair,
  formatUsdValue,
  toTokenUnit,
} from "@/utils/formatters";

export const createDataProvider = (
  positions: PositionData[],
  getPairName: (amm: string) => PairId
) => {
  return positions.map((position) => {
    const pairId = getPairName(position.amm);
    const pair = getPair(pairId);
    const size = toTokenUnit(position.size);
    const direction = size.lt(0) ? Directions.Short : Directions.Long;
    const leverage = toTokenUnit(position.leverage);
    const entryPrice = toTokenUnit(position.entryPrice);
    const markPrice = toTokenUnit(position.underlyingPrice);

    return {
      pair,
      amm: position.amm,
      originalSize: position.size,
      id: pair.id,
      symbol: formatPair(pair.id),
      direction: capitalize(direction),
      directionColor:
        direction === Directions.Long ? "alert.lemon" : "alert.guava",
      leverage: `${formatNumber(leverage, { base: 0 })}X`,
      size: formatNumber(size, {
        productId: pair.productIds[1],
      }),
      entryPrice: formatUsdValue(entryPrice),
      markPrice: formatUsdValue(markPrice),
      marginRatio: "", // TODO: provide when available
      liquidationPrice: "", // TODO: provide when available
      profitAndLoss: "", // TODO: provide when available
      isInProfit: false,
    };
  });
};
