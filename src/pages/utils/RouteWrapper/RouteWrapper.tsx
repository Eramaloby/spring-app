import type { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useRecoverSession } from '../../../hooks/useRecoverSession';

interface RouteWrapperProps {
  children: ReactNode;
  guestOnly?: boolean;
}

const RouteWrapper = ({ children, guestOnly = false }: RouteWrapperProps) => {
  const { isCheckingAuth, isAuthenticated } = useRecoverSession();

  if (isCheckingAuth) {
    return <p>Trying authenticate...</p>;
  }

  if (guestOnly && isAuthenticated) {
    return <Navigate to='/' replace />;
  }

  if (!guestOnly && !isAuthenticated) {
    return <Navigate to='/login' replace />;
  }

  return <>{children}</>;
};

export default RouteWrapper;
