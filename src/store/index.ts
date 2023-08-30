import { configureStore } from "@reduxjs/toolkit";

import unitsReducer from "./unitsSlice";
import inputReducer from "./inputSlice";

export const store = configureStore({
  reducer: {
    units: unitsReducer,
    input: inputReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
