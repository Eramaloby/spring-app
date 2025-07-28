import { type ProductsActions, type ProductsState, SET_PRODUCTS_TO_SHOW } from './products.types';

import { PRODUCTS_BlOCK_CONTENT } from '../../constants/productsBlockContent';

const initialProductsState: ProductsState = {
  productsContent: PRODUCTS_BlOCK_CONTENT,
  productsToShow: PRODUCTS_BlOCK_CONTENT,
};

export const productReducer = (
  state: ProductsState = initialProductsState,
  action: ProductsActions
): ProductsState => {
  switch (action.type) {
    case SET_PRODUCTS_TO_SHOW:
      return { ...state, productsToShow: action.payload };
    default:
      return state;
  }
};
