import { createSlice } from '@reduxjs/toolkit';
import type { UserState } from './userTypes';
import {
  loginSuccessReducer,
  userLoadingReducer,
  userErrorReducer,
  accessTokenReducer,
  setIsAuthenticatedReducer,
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
    setIsAuthenticated: setIsAuthenticatedReducer,
  },
});

export const { loginSuccess, userLoading, userError, setAccessToken, setIsAuthenticated } =
  userSlice.actions;
export default userSlice.reducer;
