import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import {
  type LoginSuccessResponse,
  type LoginRequestBody,
  type LoginErrorResponse,
} from '../types/auth.types';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginSuccessResponse, LoginRequestBody>({
      query: (credentials) => ({
        url: 'login',
        method: 'POST',
        body: credentials,
      }),
      transformErrorResponse: (response: { status: number; data: LoginErrorResponse }) => {
        return response.data;
      },
    }),
  }),
});

export const { useLoginMutation } = authApi;
