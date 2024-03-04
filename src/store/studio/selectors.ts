import { createSelector } from 'reselect';

import type { RootState } from '@/store';

export const selectExplorer = createSelector(
  [(state: RootState) => state.studio.explorer],
  explorer => explorer,
);

export const selectCurrentExplorer = createSelector(
  [(state: RootState) => state.studio.currentExplorer],
  currentExplorer => currentExplorer,
);

export const selectExplorerWidth = createSelector(
  [(state: RootState) => state.studio.width],
  width => width,
);

export const selectExplorerDragging = createSelector(
  [(state: RootState) => state.studio.dragging],
  dragging => dragging,
);

export const selectFlowId = createSelector(
  [(state: RootState) => state.studio.flowId],
  flowId => flowId,
);
