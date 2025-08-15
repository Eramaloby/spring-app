import {
  fetchBaseQuery,
  type BaseQueryFn,
  type FetchArgs,
  type FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';
import { setAccessToken } from '../../features/user/userSlice';
import { getApiUrl } from '../../pages/utils/getApiUrl/getApiUrl';

const usersApiUrl = getApiUrl();

const baseQuery = fetchBaseQuery({
  baseUrl: usersApiUrl,
  credentials: 'include',
});

export const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    const refreshResult = await baseQuery(
      { url: 'users/refresh', method: 'POST' },
      api,
      extraOptions
    );
    if (refreshResult.data) {
      const { accessToken } = refreshResult.data as { accessToken: string };
      api.dispatch(setAccessToken(accessToken));

      result = await baseQuery(args, api, extraOptions);
    } else {
      console.error('Failed to refresh token. Logging out...');
      api.dispatch(setAccessToken(null));
    }
  }

  return result;
};
