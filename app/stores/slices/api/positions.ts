import { AppState, CustomStateCreator } from "../../types";
import { Position } from "@/types/api";

interface PositionsProps {
  list: Position[];
}

export interface PositionsSlice {
  positions: PositionsProps & {
    setPositions: (positions: Position[]) => void;
  };
}

export const createPositionsSlice: CustomStateCreator<PositionsSlice> = (
  set,
  _get
) => ({
  positions: {
    list: [],
    setPositions: (positions: Position[]) => {
      set(function setPositions(state: AppState) {
        state.positions.list = positions;
      });
    },
  },
});
