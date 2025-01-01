import { configureStore } from "@reduxjs/toolkit";
import viewReducer from "./slices/viewSlice";
import templateReducer from "./slices/templateSlice";

const store = configureStore({
  reducer: {
    view: viewReducer,
    template: templateReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
