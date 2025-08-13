import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import {
  type LoginSuccessResponse,
  type LoginRequestBody,
  type LoginErrorResponse,
} from '../types/auth.types';
import type {
  SignUpSuccessResponse,
  SignUpRequestBody,
  SignUpErrorResponse,
} from '../types/signup.types';
import { getApiUrl } from '../pages/utils/getApiUrl/getApiUrl';

import { setAccessToken } from '../features/user/userSlice';

const usersApiUrl = getApiUrl() + 'users';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: usersApiUrl,
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginSuccessResponse, LoginRequestBody>({
      query: (credentials) => ({
        url: 'login',
        method: 'POST',
        body: credentials,
      }),
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          if (data.accessToken) {
            dispatch(setAccessToken(data.accessToken));
          }
        } catch (error) {
          console.error('Login failed: ', error);
        }
      },
      transformErrorResponse: (response: { status: number; data: LoginErrorResponse }) => {
        return response.data;
      },
    }),
    signUp: builder.mutation<SignUpSuccessResponse, SignUpRequestBody>({
      query: (credentials) => ({
        url: 'signup',
        method: 'POST',
        body: credentials,
      }),
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          if (data.accessToken) {
            dispatch(setAccessToken(data.accessToken));
          }
        } catch (error) {
          console.error('Sign up failed: ', error);
        }
      },
      transformErrorResponse: (response: { status: number; data: SignUpErrorResponse }) => {
        return response.data;
      },
    }),
  }),
});

export const { useLoginMutation, useSignUpMutation } = authApi;
