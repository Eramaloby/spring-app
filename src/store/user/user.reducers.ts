import {
  type UserState,
  type UserActions,
  SET_USER_PASSWORD,
  SET_USER_LOGIN,
  SET_USER_IS_AUTHENTICATED,
} from './user.types';

const initialUserState: UserState = {
  login: '',
  password: '',
  isAuthenticated: false,
};

export const userReducer = (
  state: UserState = initialUserState,
  action: UserActions
): UserState => {
  switch (action.type) {
    case SET_USER_PASSWORD:
      return { ...state, password: action.payload };
    case SET_USER_LOGIN:
      return { ...state, login: action.payload };
    case SET_USER_IS_AUTHENTICATED:
      return { ...state, isAuthenticated: true };
    default:
      return state;
  }
};
