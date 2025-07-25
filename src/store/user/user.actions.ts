import {
  type UserActions,
  SET_USER_LOGIN,
  SET_USER_PASSWORD,
  SET_USER_IS_AUTHENTICATED,
} from './user.types';

export const setUserLogin = (login: string): UserActions => ({
  type: SET_USER_LOGIN,
  payload: login,
});

export const setUserPassword = (password: string): UserActions => ({
  type: SET_USER_PASSWORD,
  payload: password,
});

export const setUserIsAuthenticated = (): UserActions => ({
  type: SET_USER_IS_AUTHENTICATED,
});
