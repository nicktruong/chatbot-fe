import { lazyLoad } from '@/utils';

export const Studio = lazyLoad(
  () => import('./Studio'),
  module => module.Studio,
);
