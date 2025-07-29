import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import { productsApi } from '../services/productsApi';
import { authApi } from '../services/authApi';
import { rtkQueryLogger } from './middleware/apiLogger';

export const store = configureStore({
  reducer: {
    user: userReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware, authApi.middleware, rtkQueryLogger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
