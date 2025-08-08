import { createSlice } from '@reduxjs/toolkit';
import type { ProductsState } from './productTypes';

import { setProductsReducer } from './productsReducers';

const initialProductsState: ProductsState = { products: [] };

const productsSlice = createSlice({
  name: 'products',
  initialState: initialProductsState,
  reducers: {
    setProducts: setProductsReducer,
  },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
