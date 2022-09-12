import { AppState, CustomStateCreator } from "../../types";
import { PositionEvent } from "@/types/api";

interface RecentPositionsProps {
  list: PositionEvent[];
}

export interface RecentPositionsSlice {
  recentPositions: RecentPositionsProps & {
    setPositions: (events: PositionEvent[]) => void;
  };
}

export const createRecentPositionsSlice: CustomStateCreator<RecentPositionsSlice> =
  (set, _get) => ({
    recentPositions: {
      list: [],
      setPositions: (events: PositionEvent[]) => {
        set(function setPositions(state: AppState) {
          state.recentPositions.list = events;
        });
      },
    },
  });
