import { AppState, CustomStateCreator } from "../../types";
import { Amm } from "@/types/api";

export interface AmmSlice {
  amm: Amm & {
    setAmmInfo: (amm: Amm) => void;
  };
}

export const createAmmSlice: CustomStateCreator<AmmSlice> = (set, _get) => ({
  amm: {
    id: "",
    quoteAsset: "",
    priceFeedKey: "",
    fundingPeriod: 0,
    setAmmInfo: (amm: Amm) => {
      set(function setAmmInfo(state: AppState) {
        state.amm = { ...state.amm, ...amm };
      });
    },
  },
});
