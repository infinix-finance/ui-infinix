import * as R from "ramda";
import create from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import { createAmmSlice } from "./slices/api/amm";
import { createMarketsSlice } from "./slices/api/markets";
import { createPriceHistorySlice } from "./slices/api/priceHistory";
import { createRecentPositionsSlice } from "./slices/api/recentPositions";
import { createUserPositionsSlice } from "./slices/api/userPositions";
import { createConnectionSlice } from "./slices/connection";
import { createNotificationsSlice } from "./slices/notifications";
import { createUISlice } from "./slices/ui";
import { AppState, CustomStateCreator } from "./types";

import { createTradingSidebarSlice } from "@/features/Contents/TradingSidebar/TradingSidebar.slice";

export const addMiddlewares = (storeCreator: CustomStateCreator<AppState>) => {
  return devtools(immer(storeCreator));
};

export const useStore = create<AppState>()(
  addMiddlewares((...params) => ({
    ...createConnectionSlice(...params),
    ...createNotificationsSlice(...params),
    ...createUISlice(...params),
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
