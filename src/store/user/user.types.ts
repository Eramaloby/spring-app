export interface UserState {
  login: string;
  password: string;
  isAuthenticated: boolean;
}

export const SET_USER_LOGIN = 'SET_USER_LOGIN';
export const SET_USER_PASSWORD = 'SET_USER_PASSWORD';
export const SET_USER_IS_AUTHENTICATED = 'SET_USER_IS_AUTHENTICATED';

export interface SetUserLoginAction {
  type: typeof SET_USER_LOGIN;
  payload: string;
}

export interface SetUserPasswordAction {
  type: typeof SET_USER_PASSWORD;
  payload: string;
}

export interface SetUserIsAuthenticatedAction {
  type: typeof SET_USER_IS_AUTHENTICATED;
}

export type UserActions = SetUserLoginAction | SetUserPasswordAction | SetUserIsAuthenticatedAction;
