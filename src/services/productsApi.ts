import { createApi } from '@reduxjs/toolkit/query/react';
import { type Product } from '../constants/productsBlockContent';
import { baseQueryWithReauth } from './utils/baseQueryWithReauth';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], string | void>({
      query: (searchTerm) => {
        if (searchTerm) {
          return {
            url: `products`,
            params: { search: searchTerm },
          };
        }

        return 'products';
      },
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
