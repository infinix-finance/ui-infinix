import { StateCreator } from "zustand";
import { WritableDraft } from "immer/dist/internal";

import { ConnectionSlice } from "./slices/connection";
import { NotificationsSlice } from "./slices/notifications";
import { RatesSlice } from "./slices/rates";

import { TradingSidebarSlice } from "@/features/Contents/TradingSidebar/TradingSidebar.slice";

type Mutators = [["zustand/devtools", never], ["zustand/immer", never]];

export interface CustomStateCreator<T>
  extends StateCreator<AppState, Mutators, [], T> {}

export type AppState = WritableDraft<
  ConnectionSlice & NotificationsSlice & RatesSlice & TradingSidebarSlice
>;
