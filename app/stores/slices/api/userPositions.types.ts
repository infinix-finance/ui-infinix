import { Pair, PairId } from "@/defi";
import { PositionData, PositionEvent } from "@/types/api";

export interface UserPositionData extends PositionData {
  pairId: PairId;
}

export interface UserPositionEvent extends PositionEvent {
  amm: string;
  pairId: PairId;
  leverage: string; // remove when Juraj is ready.
}

export interface PositionGridData {
  id: PairId;
  pair: Pair;
  amm: string;
  originalSize: string;
  symbol: string;
  direction: string;
  directionColor: string;
  leverage: string;
  size: string;
  entryPrice: string;
  markPrice: string;
  marginRatio: string;
  liquidationPrice: string;
  profitAndLoss: string;
  isInProfit: boolean;
}

export interface HistoryGridData {
  pair: Pair;
  id: string;
  symbol: string;
  direction: string;
  directionColor: string;
  leverage: string;
  date: string;
  time: string;
  type: string;
  amount: string;
  price: string;
  total: string;
  fee: string;
  profitAndLoss: string;
}
