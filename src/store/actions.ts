import {
  SET_USER_LOGIN,
  SET_USER_PASSWORD,
  SET_PRODUCTS_TO_SHOW,
  type AppActions,
} from './types';
import { type Product } from '../constants/productsBlockContent';

export const setUserLogin = (login: string): AppActions => ({
  type: SET_USER_LOGIN,
  payload: login,
});

export const setUserPassword = (password: string): AppActions => ({
  type: SET_USER_PASSWORD,
  payload: password,
});

export const setProductsToShow = (productsToShow: Product[]): AppActions => ({
  type: SET_PRODUCTS_TO_SHOW,
  payload: productsToShow,
});
