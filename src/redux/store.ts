import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./features/Tasks/taskSlice";

export const store = configureStore({
  reducer: {
    todo: taskReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
