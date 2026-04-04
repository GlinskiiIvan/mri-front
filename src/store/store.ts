import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import {unauthorizedErrorMiddleware, authReducer} from "./slices/auth";
import {noticesReducer} from "./slices/notices";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        notices: noticesReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            unauthorizedErrorMiddleware,
        ]),
})

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;