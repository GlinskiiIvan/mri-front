import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import {unauthorizedErrorMiddleware, authReducer} from "./slices/auth";
import {noticesReducer} from "./slices/notices";
import { patientApi } from './services/patient';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        notices: noticesReducer,
        [patientApi.reducerPath]: patientApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            unauthorizedErrorMiddleware,
            patientApi.middleware,
        ]),
})

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;