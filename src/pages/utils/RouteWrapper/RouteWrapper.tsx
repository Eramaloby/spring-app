import { useEffect, useState, type ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/useAppHooks';
import { useLazyRefreshQuery } from '../../../services/authApi';
import { setAccessToken, setIsAuthenticated } from '../../../features/user/userSlice';

interface RouteWrapperProps {
  children: ReactNode;
  guestOnly?: boolean;
}

const RouteWrapper = ({ children, guestOnly = false }: RouteWrapperProps) => {
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

  if (isCheckingAuth) {
    return <p>Trying authenticate...</p>;
  }

  if (guestOnly) {
    return isAuthenticated ? <Navigate to='/' replace /> : <>{children}</>;
  } else {
    return isAuthenticated ? <>{children}</> : <Navigate to='/login' replace />;
  }

  return <>{children}</>;
};

export default RouteWrapper;
