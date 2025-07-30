import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { type Product } from '../constants/productsBlockContent';

const apiUrl = import.meta.env.VITE_API_URL;

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
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
