import { StateCreator } from "zustand";

import { CommonSlice } from "./common";
import { OtherSlice } from "./other";
import { ConnectionSlice } from "./slices/connection";
import { NotificationsSlice } from "./slices/notifications";
import { RatesSlice } from "./slices/rates";
import { MarketsSlice } from "./slices/api/markets";
import { AmmSlice } from "./slices/api/amm";
import { PriceHistorySlice } from "./slices/api/priceHistory";
import { UserPositionsSlice } from "./slices/api/userPositions";

type Mutators = [["zustand/devtools", never], ["zustand/immer", never]];

export interface CustomStateCreator<T>
  extends StateCreator<AppState, Mutators, [], T> {}

export type AppState = CommonSlice &
  OtherSlice &
  ConnectionSlice &
  NotificationsSlice &
  RatesSlice &
  MarketsSlice &
  AmmSlice &
  PriceHistorySlice &
  UserPositionsSlice;
