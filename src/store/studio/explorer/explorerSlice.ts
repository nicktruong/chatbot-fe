import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { ExplorerType, MIN_EXPLORER_WIDTH } from '@/app/pages/Studio/constants';

import type { ExplorerState } from './interfaces';

const initialState: ExplorerState = {
  dragging: false,
  width: MIN_EXPLORER_WIDTH,
  explorer: ExplorerType.FLOW,
  currentExplorer: ExplorerType.FLOW,
};

// TODO: Cache previous width before closing
const explorerSlice = createSlice({
  name: 'explorer',
  initialState,
  reducers: {
    setExplorer: (state, action: PayloadAction<ExplorerType | null>) => {
      state.currentExplorer = action.payload;

      if (action.payload) {
        state.explorer = action.payload;
      }
    },
    setDragging: (state, action: PayloadAction<boolean>) => {
      state.dragging = action.payload;
    },
    setWidth: (state, action: PayloadAction<number>) => {
      const width = action.payload;

      if (width === 0) {
        state.currentExplorer = null;
      } else if (width > 0) {
        state.width = width;
        state.currentExplorer = state.explorer;
      }
    },
  },
});

export default explorerSlice.reducer;

export const { setDragging, setExplorer, setWidth } = explorerSlice.actions;
