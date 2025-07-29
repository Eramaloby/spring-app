import { configureStore } from '@reduxjs/toolkit';
import { authApi } from '../services/authApi';

export const setupApiStore = () => {
  return configureStore({
    reducer: {
      [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware),
  });
};

export type AppStore = ReturnType<typeof setupApiStore>;
export type AppDispatch = AppStore['dispatch'];
