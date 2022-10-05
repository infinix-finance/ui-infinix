import {
  Directions,
  getPair,
  mapOriginalPositionStatus,
  OriginalPositionChangeStatuses,
  PairId,
  PositionChangeStatuses,
} from "@/defi";
import { AppState } from "@/stores/types";
import { Position } from "@/types/api";
import {
  capitalize,
  formatNumber,
  formatPair,
  formatUsdValue,
  toTokenUnit,
} from "@/utils/formatters";
import { format, secondsToMilliseconds } from "date-fns";
import {
  HistoryGridData,
  NotificationHistoryData,
  PositionGridData,
  UserPositionData,
  UserPositionEvent,
} from "./userPositions.types";

export const transformPositions = (
  positions: Position[],
  state: AppState
): UserPositionData[] => {
  return positions
    .map(({ position }) => ({
      ...position,
      pairId: state.markets.getPairName(position.amm) as PairId,
    }))
    .sort((a, b) => b.timestamp - a.timestamp);
};

export const transformHistory = (
  positions: Position[],
  state: AppState
): UserPositionEvent[] => {
  return positions
    .reduce((target: UserPositionEvent[], { position, history }) => {
      const enhancedHistory = history.map((current, idx) => {
        const prevEntry =
          current.type === OriginalPositionChangeStatuses.Mgn && idx > 0
            ? history[idx - 1]
            : {};

        return {
          ...prevEntry,
          ...current,
          amm: position.amm,
          pairId: state.markets.getPairName(position.amm),
        } as UserPositionEvent;
      });

      return [...target, ...enhancedHistory];
    }, [])
    .sort((a, b) => b.timestamp - a.timestamp);
};

export const createPositionGridData = (
  positions: UserPositionData[]
): PositionGridData[] => {
  return positions.map((position) => {
    const pair = getPair(position.pairId);
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

export const createHistoryGridData = (
  history: UserPositionEvent[]
): HistoryGridData[] => {
  return history.map((historyEntry) => {
    const pair = getPair(historyEntry.pairId);
    const size = toTokenUnit(historyEntry.size!);
    const direction = size.lt(0) ? Directions.Short : Directions.Long;
    const leverage = toTokenUnit(historyEntry.leverage);
    const entryPrice = toTokenUnit(historyEntry.entryPrice);
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
      profitAndLoss: "", // TODO: provide when available
    };
  });
};

export const createNotificationHistoryData = (
  history: UserPositionEvent[]
): NotificationHistoryData[] => {
  return history.map((historyEntry) => {
    const pair = getPair(historyEntry.pairId);
    const size = toTokenUnit(historyEntry.size!);
    const direction = size.lt(0) ? Directions.Short : Directions.Long;
    const entryPrice = toTokenUnit(historyEntry.entryPrice);
    const markPrice = toTokenUnit(historyEntry.underlyingPrice);
    const realizedPnl = toTokenUnit(historyEntry.realizedPnl!);
    const timestamp = secondsToMilliseconds(historyEntry.timestamp);
    const status = mapOriginalPositionStatus(
      historyEntry.type as OriginalPositionChangeStatuses
    );
    const isOpen = status === PositionChangeStatuses.Open;

    const commonProps = {
      id: timestamp + pair.id,
      productIds: pair.productIds,
      direction,
      status,
      rows: [
        {
          label: format(timestamp, "dd/MM/yyyy"),
          value: format(timestamp, "HH:mm:ss"),
        },
      ],
    };
    const additionalRows = isOpen
      ? [
          { label: "Entry Price", value: formatUsdValue(entryPrice) },
          { label: "Mark Price", value: formatUsdValue(markPrice) },
          { label: "Position Size", value: formatNumber(size, { base: 2 }) },
          { label: "Liq. Price (est.)", value: "" },
        ]
      : [{ label: "PnL (ROE%)", value: formatUsdValue(realizedPnl) }];

    return {
      ...commonProps,
      rows: [...commonProps.rows, ...additionalRows],
    };
  });
};
