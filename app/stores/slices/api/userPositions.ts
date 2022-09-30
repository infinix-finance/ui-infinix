import { Position } from "@/types/api";
import { AppState, CustomStateCreator } from "../../types";
import {
  HistoryGridData,
  NotificationHistoryData,
  NotificationsHistoryStats,
  PositionGridData,
  UserPositionData,
  UserPositionEvent,
} from "./userPositions.types";
import {
  createHistoryGridData,
  createNotificationHistoryData,
  createPositionGridData,
  transformHistory,
  transformPositions,
} from "./userPositions.utils";

interface UserPositionsProps {
  positionsList: UserPositionData[];
  positionsHistory: UserPositionEvent[];
}

export interface UserPositionsSlice {
  userPositions: UserPositionsProps & {
    setPositions: (positions: Position[]) => void;
    getPositionsGridData: () => PositionGridData[];
    getHistoryGridData: () => HistoryGridData[];
    getNotificationsHistoryData: () => NotificationHistoryData[];
    getNotificationsHistoryStats: () => NotificationsHistoryStats;
  };
}

export const createUserPositionsSlice: CustomStateCreator<UserPositionsSlice> =
  (set, get) => ({
    userPositions: {
      positionsList: [],
      positionsHistory: [],

      setPositions: (positions: Position[]) => {
        set(function setPositions(state: AppState) {
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

      getNotificationsHistoryData: (): NotificationHistoryData[] => {
        return createNotificationHistoryData(
          get().userPositions.positionsHistory
        );
      },

      getNotificationsHistoryStats: (): NotificationsHistoryStats => {
        const history = get().userPositions.positionsHistory;

        return {
          populated: !!history.length,
          unread: !!history.filter(({ notification }) => notification).length,
        };
      },
    },
  });
