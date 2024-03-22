import { createSelector } from 'reselect';

import type { RootState } from '@/store';

import type { PropertiesData } from './interfaces';

export const selectPropertiesData = createSelector(
  [(state: RootState) => state.properties.data],
  data => data,
  {
    memoizeOptions: {
      resultEqualityCheck: (
        prevState: PropertiesData,
        nextState: PropertiesData,
      ) => {
        return prevState?.data?.id === nextState?.data?.id;
      },
    },
  },
);
