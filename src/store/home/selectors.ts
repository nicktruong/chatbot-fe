import { createSelector } from 'reselect';

import type { RootState } from '@/store';

export const selectTabIndex = createSelector(
  [(state: RootState) => state.home.tabIndex],
  tabIndex => tabIndex,
);
