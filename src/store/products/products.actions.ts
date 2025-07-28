import type { Product } from '../../constants/productsBlockContent';
import { SET_PRODUCTS_TO_SHOW, type ProductsActions } from './products.types';

export const setProductsToShow = (productsToShow: Product[]): ProductsActions => ({
  type: SET_PRODUCTS_TO_SHOW,
  payload: productsToShow,
});
