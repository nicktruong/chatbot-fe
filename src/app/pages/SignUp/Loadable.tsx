import { lazyLoad } from 'utils/loadable';

export const SignUp = lazyLoad(
  () => import('./SignUp'),
  module => module.SignUp,
);
