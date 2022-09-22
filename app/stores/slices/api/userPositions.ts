import { OriginalPositionChangeStatuses, PairId } from "@/defi";
import { Position, PositionData, PositionEvent } from "@/types/api";
import { AppState, CustomStateCreator } from "../../types";

interface UserPositionsProps {
  list: Position[];
}

export interface UserPositionEvent extends PositionEvent {
  amm: string;
  pairId: PairId;
  leverage: string; // remove when Juraj is ready.
}

export interface UserPositionsSlice {
  userPositions: UserPositionsProps & {
    setPositions: (positions: Position[]) => void;
    getPositions: () => PositionData[];
    getHistory: () => UserPositionEvent[];
  };
}

export const createUserPositionsSlice: CustomStateCreator<UserPositionsSlice> =
  (set, get) => ({
    userPositions: {
      list: [],

      setPositions: (positions: Position[]) => {
        set(function setPositions(state: AppState) {
          state.userPositions.list = positions;
        });
      },

      getPositions: (): PositionData[] => {
        return get()
          .userPositions.list.map(({ position }) => ({
            ...position,
            pairId: get().markets.getPairName(position.amm),
          }))
          .sort((a, b) => b.timestamp - a.timestamp);
      },

      getHistory: (): UserPositionEvent[] => {
        return get()
          .userPositions.list.reduce(
            (target: UserPositionEvent[], { position, history }) => {
              const enhancedHistory = history.map((current, idx) => {
                const isMarginChanging =
                  current.type === OriginalPositionChangeStatuses.Mgn;
                const isPrevEntry = idx > 0;
                const prevEntry =
                  isMarginChanging && isPrevEntry ? history[idx - 1] : {};

                return {
                  ...prevEntry,
                  ...current,
                  amm: position.amm,
                  pairId: get().markets.getPairName(position.amm),
                } as UserPositionEvent;
              });

              return [...target, ...enhancedHistory];
            },
            []
          )
          .sort((a, b) => b.timestamp - a.timestamp);
      },
    },
  });
