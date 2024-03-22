import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import type { PropertiesData, PropertiesState } from './interfaces';

const initialState: PropertiesState = {};

const propertiesSlice = createSlice({
  name: 'properties',
  initialState,
  reducers: {
    setFocus: (state, action: PayloadAction<PropertiesData>) => {
      state.data = action.payload;
    },
  },
});

export default propertiesSlice.reducer;

export const { setFocus } = propertiesSlice.actions;
