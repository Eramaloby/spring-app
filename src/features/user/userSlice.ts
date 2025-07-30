import { createSlice } from '@reduxjs/toolkit';
import type { UserState } from './userTypes';
import { loginSuccessReducer, userLoadingReducer, userErrorReducer } from './userReducers';

const initialUserState: UserState = {
  currentUser: null,
  isAuthenticated: false,
  loading: 'idle',
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    loginSuccess: loginSuccessReducer,
    userLoading: userLoadingReducer,
    userError: userErrorReducer,
  },
});

export const { loginSuccess, userLoading, userError } = userSlice.actions;
export default userSlice.reducer;
