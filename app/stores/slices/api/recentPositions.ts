import { PositionEvent } from "@/types/api";
import { formatUsdValue, toTokenUnit } from "@/utils/formatters";
import { AppState, CustomStateCreator } from "../../types";
import { handleError } from "../slices.utils";

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
  (set, get) => ({
    recentPositions: {
      list: [],

      setPositions: (events: PositionEvent[]) => {
        if (handleError(get(), events)) {
          return;
        }

        set(function setPositions(state: AppState) {
          state.recentPositions.list = events;
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

  const price = toTokenUnit(mostRecentPosition?.entryPrice);
  return formatUsdValue(price);
};
