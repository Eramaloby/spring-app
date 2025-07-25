import type { Product } from '../../constants/productsBlockContent';

export interface ProductsState {
  productsContent: Product[];
  productsToShow: Product[];
}

export const SET_PRODUCTS_TO_SHOW = 'SET_PRODUCTS_TO_SHOW';

export interface SetProductsToShow {
  type: typeof SET_PRODUCTS_TO_SHOW;
  payload: Product[];
}

export type ProductsActions = SetProductsToShow;
