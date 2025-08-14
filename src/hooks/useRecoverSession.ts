import { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from './useAppHooks';
import { useLazyRefreshQuery } from '../services/authApi';
import { setAccessToken, setIsAuthenticated } from '../features/user/userSlice';

export const useRecoverSession = () => {
  const { accessToken, isAuthenticated } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  const [triggerRefresh] = useLazyRefreshQuery();

  useEffect(() => {
    const checkAuthStatus = async () => {
      if (accessToken) {
        setIsCheckingAuth(false);
        return;
      }

      try {
        const result = await triggerRefresh();
        if (result.data?.accessToken) {
          dispatch(setAccessToken(result.data.accessToken));
          dispatch(setIsAuthenticated(true));
        } else {
          dispatch(setAccessToken(null));
        }
      } catch (error) {
        dispatch(setAccessToken(null));
        console.error('Failed to refresh access token:', error);
      } finally {
        setIsCheckingAuth(false);
      }
    };

    checkAuthStatus();
  }, [accessToken, dispatch, triggerRefresh]);

  return { isCheckingAuth, isAuthenticated };
};
