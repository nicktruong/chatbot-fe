import { createSelector } from 'reselect';

import type { RootState } from '@/store';

export const selectPropertiesCard = createSelector(
  [(state: RootState) => state.properties.card],
  card => card,
);
