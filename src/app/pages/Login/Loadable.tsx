import { lazyLoad } from 'utils/loadable';

export const Login = lazyLoad(
  () => import('./Login'),
  module => module.Login,
);
