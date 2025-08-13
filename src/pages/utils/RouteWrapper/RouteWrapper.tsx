import type { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import { useAppSelector } from '../../../hooks/useAppHooks';

interface RouteWrapperProps {
  children: ReactNode;
  guestOnly?: boolean;
}

const RouteWrapper = ({ children, guestOnly = false }: RouteWrapperProps) => {
  const isAuthenticated = useAppSelector(
    (state) => state.user.isAuthenticated && state.user.accessToken
  );
  if (guestOnly && isAuthenticated) {
    return <Navigate to='/' replace />;
  }

  if (!guestOnly && !isAuthenticated) {
    return <Navigate to='/login' replace />;
  }

  return <>{children}</>;
};

export default RouteWrapper;
