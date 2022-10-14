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
  closeEvents: string[];
}

export interface UserPositionsSlice {
  userPositions: UserPositionsProps & {
    setPositions: (positions: Position[]) => void;
    getPositionsGridData: () => PositionGridData[];
    getHistoryGridData: () => HistoryGridData[];
    getNotificationsHistoryData: () => NotificationHistoryData[];
    getNotificationsHistoryStats: () => NotificationsHistoryStats;
    addCloseEvent: (amm: string) => void;
    removeCloseEvent: (amm: string) => void;
    isCloseEventInProgress: (amm: string) => boolean;
  };
}

export const createUserPositionsSlice: CustomStateCreator<UserPositionsSlice> =
  (set, get) => ({
    userPositions: {
      positionsList: [],
      positionsHistory: [],
      closeEvents: [],

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
        const { positionsList, closeEvents } = get().userPositions;
        return createPositionGridData(positionsList, closeEvents);
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

      addCloseEvent: (amm: string) => {
        set(function addCloseEvent(state: AppState) {
          state.userPositions.closeEvents.push(amm);
        });
      },

      removeCloseEvent: (amm: string) => {
        set(function removeCloseEvent(state: AppState) {
          state.userPositions.closeEvents =
            state.userPositions.closeEvents.filter(
              (currentAmm) => currentAmm !== amm
            );
        });
      },

      isCloseEventInProgress: (amm: string): boolean => {
        return get().userPositions.closeEvents.includes(amm);
      },
    },
  });
