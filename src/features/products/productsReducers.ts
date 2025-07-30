import type { PayloadAction } from '@reduxjs/toolkit';
import type { ProductsState } from './productTypes';
import type { Product } from '../../constants/productsBlockContent';

export const setProductsReducer = (state: ProductsState, action: PayloadAction<Product[]>) => {
  state.products = action.payload;
};
