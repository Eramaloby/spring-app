import { createSlice } from '@reduxjs/toolkit';
import type { UserState } from './userTypes';
import {
  loginSuccessReducer,
  userLoadingReducer,
  userErrorReducer,
  accessTokenReducer,
} from './userReducers';

const initialUserState: UserState = {
  currentUser: null,
  isAuthenticated: false,
  loading: 'idle',
  error: null,
  accessToken: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    loginSuccess: loginSuccessReducer,
    userLoading: userLoadingReducer,
    userError: userErrorReducer,
    setAccessToken: accessTokenReducer,
  },
});

export const { loginSuccess, userLoading, userError, setAccessToken } = userSlice.actions;
export default userSlice.reducer;
