import { configureStore } from "@reduxjs/toolkit";
import viewReducer from "./slices/viewSlice";
import templateReducer from "./slices/templateSlice";
import interactionsReducer from "./slices/interactionsSlice";

const store = configureStore({
  reducer: {
    view: viewReducer,
    template: templateReducer,
    interactions: interactionsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
