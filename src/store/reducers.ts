import { combineReducers } from 'redux';
import { PRODUCTS_BlOCK_CONTENT } from '../constants/productsBlockContent';
import { NAVBAR_CONTENT } from '../constants/navbarContents';

import type {
  UserState,
  ProductsState,
  NavbarState,
  AppActions,
} from './types';
import {
  SET_USER_LOGIN,
  SET_USER_PASSWORD,
  SET_USER_IS_AUTHENTICATED,
  SET_PRODUCTS_TO_SHOW,
} from './types';

const initialUserState: UserState = {
  login: '',
  password: '',
  isAuthenticated: false,
};

const userReducer = (
  state: UserState = initialUserState,
  action: AppActions
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

const initialProductsState: ProductsState = {
  productsContent: PRODUCTS_BlOCK_CONTENT,
  productsToShow: PRODUCTS_BlOCK_CONTENT,
};

const productReducer = (
  state: ProductsState = initialProductsState,
  action: AppActions
) => {
  switch (action.type) {
    case SET_PRODUCTS_TO_SHOW:
      return { ...state, productsToShow: action.payload };
    default:
      return state;
  }
};

const initialNavbarState: NavbarState = {
  navbarContent: NAVBAR_CONTENT,
};

const navbarReducer = (
  state: NavbarState = initialNavbarState,
  action: AppActions
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  user: userReducer,
  products: productReducer,
  navbar: navbarReducer,
});
