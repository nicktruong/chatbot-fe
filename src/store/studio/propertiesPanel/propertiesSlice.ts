import type { IBotCard } from '@/interfaces';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import type { PropertiesState } from './interfaces';

const initialState: PropertiesState = {};

const propertiesSlice = createSlice({
  name: 'properties',
  initialState,
  reducers: {
    setCard: (state, action: PayloadAction<IBotCard>) => {
      state.card = action.payload;
    },
  },
});

export default propertiesSlice.reducer;

export const { setCard } = propertiesSlice.actions;
