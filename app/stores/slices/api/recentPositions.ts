import { PositionEvent } from "@/types/api";
import { AppState, CustomStateCreator } from "../../types";
import { handleError } from "../slices.utils";

interface RecentPositionsProps {
  list: PositionEvent[];
  ready: boolean;
}

export interface RecentPositionsSlice {
  recentPositions: RecentPositionsProps & {
    setPositions: (events: PositionEvent[]) => void;
    setReady: (ready: boolean) => void;
    clear: () => void;
  };
}

export const createRecentPositionsSlice: CustomStateCreator<RecentPositionsSlice> =
  (set, get) => ({
    recentPositions: {
      list: [],
      ready: false,

      setPositions: (events: PositionEvent[]) => {
        if (handleError(get(), events)) {
          return;
        }

        set(function setPositions(state: AppState) {
          state.recentPositions.list = events;
          state.recentPositions.ready = true;
        });
      },

      setReady: (ready: boolean) => {
        set(function setReady(state: AppState) {
          state.recentPositions.ready = ready;
        });
      },

      clear: () => {
        get().recentPositions.setReady(false);

        set(function clear(state: AppState) {
          state.recentPositions.list = [];
        });
      },
    },
  });
