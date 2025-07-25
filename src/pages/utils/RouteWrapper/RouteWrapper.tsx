import type { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import { useAppSelector } from '../../../hooks/useAppHooks';

interface RouteWrapperProps {
  children: ReactNode;
}

const RouteWrapper = ({ children }: RouteWrapperProps) => {
  const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated);
  return isAuthenticated ? children : <Navigate to='/login' replace />;
};

export default RouteWrapper;
