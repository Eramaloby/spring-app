import type { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import { useAppSelector } from '../../../hooks/useAppHooks';

interface RouteWrapperProps {
  children: ReactNode;
  guestOnly?: boolean;
}

const RouteWrapper = ({ children, guestOnly = false }: RouteWrapperProps) => {
  const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated);
  if (guestOnly) {
    if (isAuthenticated) {
      return <Navigate to='/' replace />;
    }
  } else {
    if (!isAuthenticated) {
      return <Navigate to='/login' replace />;
    }
  }

  return <>{children}</>;
};

export default RouteWrapper;
