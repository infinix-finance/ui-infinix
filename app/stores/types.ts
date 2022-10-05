import { WritableDraft } from "immer/dist/internal";
import { StateCreator } from "zustand";

import { AmmSlice } from "./slices/api/amm";
import { MarketsSlice } from "./slices/api/markets";
import { PriceHistorySlice } from "./slices/api/priceHistory";
import { RecentPositionsSlice } from "./slices/api/recentPositions";
import { UserPositionsSlice } from "./slices/api/userPositions";
import { ConnectionSlice } from "./slices/connection";
import { NotificationsSlice } from "./slices/notifications";

import { TradingSidebarSlice } from "@/features/Contents/TradingSidebar/TradingSidebar.slice";

type Mutators = [["zustand/devtools", never], ["zustand/immer", never]];

export interface CustomStateCreator<T>
  extends StateCreator<AppState, Mutators, [], T> {}

export type AppState = WritableDraft<
  ConnectionSlice &
    NotificationsSlice &
    TradingSidebarSlice &
    MarketsSlice &
    AmmSlice &
    PriceHistorySlice &
    UserPositionsSlice &
    RecentPositionsSlice
>;
