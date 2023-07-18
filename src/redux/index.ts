import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import PostReducer from "@/redux/reducers/postReducer";

export const store = configureStore({
  reducer: {
    posts: PostReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
