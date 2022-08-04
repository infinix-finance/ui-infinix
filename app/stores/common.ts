import { AppState, CustomStateCreator } from "./types";

interface CommonProps {
  status: string;
}

export interface CommonSlice {
  common: CommonProps & {
    setStatus: (status: string) => void;
  };
}

export const createCommonSlice: CustomStateCreator<CommonSlice> = (set) => ({
  common: {
    status: "",

    setStatus: async (status: string) =>
      set(function setStatus(state: AppState) {
        state.other.status = status;
      }),
  },
});
