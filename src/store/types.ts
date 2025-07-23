import type { Product } from '../constants/productsBlockContent';
import type { NavigationSection } from '../constants/navbarContents';

export interface UserState {
  login: string;
  password: string;
}

export interface ProductsState {
  productsContent: Product[];
  productsToShow: Product[];
}

export interface NavbarState {
  navbarContent: NavigationSection[];
}

export interface RootState {
  user: UserState;
  products: ProductsState;
  navbar: NavbarState;
}

export const SET_USER_LOGIN = 'SET_USER_LOGIN';
export const SET_USER_PASSWORD = 'SET_USER_PASSWORD';
export const SET_PRODUCTS_TO_SHOW = 'SET_PRODUCTS_TO_SHOW';

interface SetUserLoginAction {
  type: typeof SET_USER_LOGIN;
  payload: string;
}

interface SetUserPasswordAction {
  type: typeof SET_USER_PASSWORD;
  payload: string;
}

interface SetProductsToShow {
  type: typeof SET_PRODUCTS_TO_SHOW;
  payload: Product[];
}

export type AppActions =
  | SetUserLoginAction
  | SetUserPasswordAction
  | SetProductsToShow;
