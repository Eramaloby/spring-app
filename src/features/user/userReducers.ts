import type { PayloadAction } from '@reduxjs/toolkit';
import type { User, UserState } from './userTypes';

export const loginSuccessReducer = (state: UserState, action: PayloadAction<User>) => {
  state.currentUser = action.payload;
  state.isAuthenticated = true;
  state.loading = 'succeeded';
  state.error = null;
};
export const userLoadingReducer = (state: UserState) => {
  state.loading = 'pending';
  state.error = null;
};
export const userErrorReducer = (state: UserState, action: PayloadAction<string>) => {
  state.loading = 'failed';
  state.error = action.payload;
};

export const accessTokenReducer = (state: UserState, action: PayloadAction<string | null>) => {
  state.accessToken = action.payload;
};
