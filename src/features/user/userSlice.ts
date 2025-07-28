import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type User, type UserState } from './userTypes';

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
    loginSuccess: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload;
      state.isAuthenticated = true;
      state.loading = 'succeeded';
      state.error = null;
    },
    userLoading: (state) => {
      state.loading = 'pending';
      state.error = null;
    },
    userError: (state, action: PayloadAction<string>) => {
      state.loading = 'failed';
      state.error = action.payload;
    },
  },
});

export const { loginSuccess, userLoading, userError } = userSlice.actions;
export default userSlice.reducer;
