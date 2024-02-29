import { Navigate, Outlet } from 'react-router-dom';

import { routes } from '@/app/routes';
import { storageKeys } from '@/constants';

export const PrivateRoutes = () => {
  const token = localStorage.getItem(storageKeys.ACCESS_TOKEN);

  return token ? <Outlet /> : <Navigate to={routes.login} />;
};
