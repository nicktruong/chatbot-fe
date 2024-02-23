import { lazyLoad } from '@/utils';

export const Login = lazyLoad(
  () => import('./Login'),
  module => module.Login,
);
