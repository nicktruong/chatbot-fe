import { createSelector } from 'reselect';

import type { RootState } from '@/store';

export const selectExplorer = createSelector(
  [(state: RootState) => state.explorer.prevExplorer],
  prevExplorer => prevExplorer,
);

export const selectCurrentExplorer = createSelector(
  [(state: RootState) => state.explorer.currentExplorer],
  currentExplorer => currentExplorer,
);

export const selectExplorerWidth = createSelector(
  [(state: RootState) => state.explorer.width],
  width => width,
);

export const selectExplorerDragging = createSelector(
  [(state: RootState) => state.explorer.dragging],
  dragging => dragging,
);
