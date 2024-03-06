import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import type { StudioState } from './interfaces';

const initialState: StudioState = {
  flowId: '',
};

// TODO: Cache previous width before closing
const studioSlice = createSlice({
  name: 'studio',
  initialState,
  reducers: {
    setFlowId: (state, action: PayloadAction<string>) => {
      state.flowId = action.payload;
    },
  },
});

export default studioSlice.reducer;

export const { setFlowId } = studioSlice.actions;
