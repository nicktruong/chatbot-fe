import { lazyLoad } from 'utils/loadable';

export const Home = lazyLoad(
  () => import('./Home'),
  module => module.Home,
);
