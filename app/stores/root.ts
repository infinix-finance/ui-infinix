import create from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import * as R from "ramda";

import { AppState, CustomStateCreator } from "./types";
import { createConnectionSlice } from "./slices/connection";
import { createNotificationsSlice } from "./slices/notifications";
import { createRatesSlice } from "./slices/rates";
import { createMarketsSlice } from "./slices/api/markets";
import { createAmmSlice } from "./slices/api/amm";
import { createPriceHistorySlice } from "./slices/api/priceHistory";
import { createUserPositionsSlice } from "./slices/api/userPositions";
import { createRecentPositionsSlice } from "./slices/api/recentPositions";

import { createTradingSidebarSlice } from "@/features/Contents/TradingSidebar/TradingSidebar.slice";

export const addMiddlewares = (storeCreator: CustomStateCreator<AppState>) => {
  return devtools(immer(storeCreator));
};

export const useStore = create<AppState>()(
  addMiddlewares((...params) => ({
    ...createConnectionSlice(...params),
    ...createNotificationsSlice(...params),
    ...createRatesSlice(...params),
    ...createTradingSidebarSlice(...params),
    ...createMarketsSlice(...params),
    ...createAmmSlice(...params),
    ...createPriceHistorySlice(...params),
    ...createUserPositionsSlice(...params),
    ...createRecentPositionsSlice(...params),
  }))
);

const initialState = useStore.getState();
export const getInitialState = () => R.clone(initialState);
