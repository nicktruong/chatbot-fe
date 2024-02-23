import { lazyLoad } from '@/utils';

export const SignUp = lazyLoad(
  () => import('./SignUp'),
  module => module.SignUp,
);
