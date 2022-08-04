import create from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import { createCommonSlice } from "./common";
import { createOtherSlice } from "./other";
import { AppState, CustomStateCreator } from "./types";

export const addMiddlewares = (storeCreator: CustomStateCreator<AppState>) => {
  return devtools(immer(storeCreator));
};

export const useStore = create<AppState>()(
  addMiddlewares((...params) => ({
    ...createCommonSlice(...params),
    ...createOtherSlice(...params),
  }))
);
