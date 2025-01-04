import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import questionSlice from "./question/questionSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice,
        questions: questionSlice,
    },
    });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;