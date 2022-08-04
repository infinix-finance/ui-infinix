import { AppState, CustomStateCreator } from "./types";

interface OtherProps {
  status: string;
}

export interface OtherSlice {
  other: OtherProps & {
    setCommonStatus: (status: string) => void;
  };
}

export const createOtherSlice: CustomStateCreator<OtherSlice> = (set) => ({
  other: {
    status: "",

    setCommonStatus: (status: string) =>
      set(function setCommonStatus(state: AppState) {
        state.common.status = status;
      }),
  },
});
