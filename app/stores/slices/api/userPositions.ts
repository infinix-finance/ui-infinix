import { Position } from "@/types/api";
import { AppState, CustomStateCreator } from "../../types";
import { handleError } from "../slices.utils";
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
      list: [],
      positionsList: [],
      positionsHistory: [],

      setPositions: (positions: Position[]) => {
        if (handleError(get(), positions)) {
          return;
        }

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
        if (!get().connection.active) return [];

        return createNotificationHistoryData(
          get().userPositions.positionsHistory
        );
      },

      getNotificationsHistoryStats: (): NotificationsHistoryStats => {
        const isWalletConnected = get().connection.active;
        const history = isWalletConnected
          ? get().userPositions.positionsHistory
          : [];

        return {
          populated: !!history.length,
          unread: !!history.filter(({ notification }) => notification).length,
        };
      },
    },
  });
