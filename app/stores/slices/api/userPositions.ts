import { Position } from "@/types/api";
import { AppState, CustomStateCreator } from "../../types";
import {
  HistoryGridData,
  PositionGridData,
  UserPositionData,
  UserPositionEvent,
} from "./userPositions.types";
import {
  createHistoryGridData,
  createPositionGridData,
  transformHistory,
  transformPositions,
} from "./userPositions.utils";

interface UserPositionsProps {
  list: Position[];
  positionsList: UserPositionData[];
  positionsHistory: UserPositionEvent[];
}

export interface UserPositionsSlice {
  userPositions: UserPositionsProps & {
    setPositions: (positions: Position[]) => void;
    getPositionsGridData: () => PositionGridData[];
    getHistoryGridData: () => HistoryGridData[];
  };
}

export const createUserPositionsSlice: CustomStateCreator<UserPositionsSlice> =
  (set, get) => ({
    userPositions: {
      list: [],
      positionsList: [],
      positionsHistory: [],

      setPositions: (positions: Position[]) => {
        set(function setPositions(state: AppState) {
          state.userPositions.list = positions;
          state.userPositions.positionsList = transformPositions(
            positions,
            get()
          );
          state.userPositions.positionsHistory = transformHistory(
            positions,
            get()
          );
        });
      },

      getPositionsGridData: (): PositionGridData[] => {
        return createPositionGridData(get().userPositions.positionsList);
      },

      getHistoryGridData: (): HistoryGridData[] => {
        return createHistoryGridData(get().userPositions.positionsHistory);
      },
    },
  });
