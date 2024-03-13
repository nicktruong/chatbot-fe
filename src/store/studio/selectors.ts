import { createSelector } from 'reselect';

import type { RootState } from '@/store';

export const selectFlowId = createSelector(
  [(state: RootState) => state.studio.flowId],
  flowId => flowId,
);
