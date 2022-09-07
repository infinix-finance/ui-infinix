import create from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import * as R from "ramda";

import { createCommonSlice } from "./common";
import { createOtherSlice } from "./other";
import { AppState, CustomStateCreator } from "./types";
import { createConnectionSlice } from "./slices/connection";
import { createNotificationsSlice } from "./slices/notifications";
import { createRatesSlice } from "./slices/rates";
import { createMarketsSlice } from "./slices/api/markets";
import { createAmmSlice } from "./slices/api/amm";
import { createPriceHistorySlice } from "./slices/api/priceHistory";
import { createUserPositionsSlice } from "./slices/api/userPositions";

export const addMiddlewares = (storeCreator: CustomStateCreator<AppState>) => {
  return devtools(immer(storeCreator));
};

export const useStore = create<AppState>()(
  addMiddlewares((...params) => ({
    ...createCommonSlice(...params),
    ...createOtherSlice(...params),
    ...createConnectionSlice(...params),
    ...createNotificationsSlice(...params),
    ...createRatesSlice(...params),
    ...createMarketsSlice(...params),
    ...createAmmSlice(...params),
    ...createPriceHistorySlice(...params),
    ...createUserPositionsSlice(...params),
  }))
);

const initialState = useStore.getState();
export const getInitialState = () => R.clone(initialState);
