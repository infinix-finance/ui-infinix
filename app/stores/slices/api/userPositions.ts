import { AppState, CustomStateCreator } from "../../types";
import { Position } from "@/types/api";

interface UserPositionsProps {
  list: Position[];
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
