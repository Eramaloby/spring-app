import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { type Product } from '../constants/productsBlockContent';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], string | void>({
      query: (searchTerm) => {
        if (searchTerm) {
          return {
            url: `products`,
            params: { nameOrDescription: searchTerm },
          };
        }

        return 'products';
      },
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
