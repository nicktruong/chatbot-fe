import { Navigate, Outlet } from 'react-router-dom';

import { routes } from '@/app/routes';
import { StorageKeys } from '@/enums';

import { SettingsManager } from './SettingsManager';

const settingsManager = SettingsManager.getInstance();

export const PrivateRoutes = () => {
  const token = settingsManager.getItem<string>(StorageKeys.ACCESS_TOKEN);

  return token ? <Outlet /> : <Navigate to={routes.login} />;
};
