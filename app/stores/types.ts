import { StateCreator } from "zustand";

import { CommonSlice } from "./common";
import { OtherSlice } from "./other";
import { ConnectionSlice } from "./slices/connection";
import { NotificationsSlice } from "./slices/notifications";

type Mutators = [["zustand/devtools", never], ["zustand/immer", never]];

export interface CustomStateCreator<T>
  extends StateCreator<AppState, Mutators, [], T> {}

export type AppState = CommonSlice &
  OtherSlice &
  ConnectionSlice &
  NotificationsSlice;
