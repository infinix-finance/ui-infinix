import { PairId } from "@/defi";
import { Position, PositionEvent } from "@/types/api";
import { AppState, CustomStateCreator } from "../../types";

interface UserPositionsProps {
  list: Position[];
}

export interface HistoryPositionEvent extends PositionEvent {
  amm: string;
  pairId: PairId;
  leverage: string; // remove when Juraj is ready.
}

export interface UserPositionsSlice {
  userPositions: UserPositionsProps & {
    setPositions: (positions: Position[]) => void;
  };
}

export const createUserPositionsSlice: CustomStateCreator<UserPositionsSlice> =
  (set, _get) => ({
    userPositions: {
      list: [],
      setPositions: (positions: Position[]) => {
        set(function setPositions(state: AppState) {
          state.userPositions.list = positions;
        });
      },
    },
  });

export const getPositions = (state: AppState) => {
  return state.userPositions.list
    .map(({ position }) => ({
      ...position,
      pairId: state.markets.getPairName(position.amm),
    }))
    .sort((a, b) => b.timestamp - a.timestamp);
};

export const getHistory = (state: AppState): HistoryPositionEvent[] => {
  return state.userPositions.list
    .reduce((target: HistoryPositionEvent[], { position, history }) => {
      const enhancedHistory = history.map((entry) => ({
        ...entry,
        amm: position.amm,
        pairId: state.markets.getPairName(position.amm),
      }));
      return [...target, ...enhancedHistory];
    }, [])
    .sort((a, b) => b.timestamp - a.timestamp);
};
