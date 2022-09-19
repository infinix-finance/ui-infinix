import { AppState, CustomStateCreator } from "../../types";
import { PositionEvent } from "@/types/api";
import { formatUsdValue, toTokenUnit } from "@/utils/formatters";

interface RecentPositionsProps {
  list: PositionEvent[];
}

export interface RecentPositionsSlice {
  recentPositions: RecentPositionsProps & {
    setPositions: (events: PositionEvent[]) => void;
    clear: () => void;
  };
}

export const createRecentPositionsSlice: CustomStateCreator<RecentPositionsSlice> =
  (set, _get) => ({
    recentPositions: {
      list: [],

      setPositions: (events: PositionEvent[]) => {
        set(function setPositions(state: AppState) {
          const sortedEvents = events.sort((a, b) => b.timestamp - a.timestamp);
          state.recentPositions.list = sortedEvents;
        });
      },

      clear: () => {
        set(function clear(state: AppState) {
          state.recentPositions.list = [];
        });
      },
    },
  });

export const getMostRecentPositionPrice = (state: AppState) => {
  const [mostRecentPosition] = state.recentPositions.list;

  const price = toTokenUnit(mostRecentPosition?.price || 0);
  return formatUsdValue(price);
};
