import { createSelector } from 'reselect';

import type { RootState } from '@/store';

export const selectCardTrayOpen = createSelector(
  [(state: RootState) => state.cardTray.open],
  open => open,
);

export const selectNodeId = createSelector(
  [(state: RootState) => state.cardTray.nodeId],
  nodeId => nodeId,
);
