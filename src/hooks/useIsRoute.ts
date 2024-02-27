import { matchPath, useLocation } from 'react-router-dom';

export const useIsRoute = (path: string) => {
  const { pathname } = useLocation();

  return !!matchPath(path, pathname);
};
