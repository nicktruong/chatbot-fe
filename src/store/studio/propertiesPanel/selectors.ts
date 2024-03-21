import { createSelector } from 'reselect';

import type { RootState } from '@/store';

export const selectPropertiesCardId = createSelector(
  [(state: RootState) => state.properties.cardId],
  cardId => cardId,
);
