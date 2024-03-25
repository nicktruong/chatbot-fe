import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import type { CardTrayState } from './interfaces';

const initialState: CardTrayState = {
  nodeId: '',
  open: false,
};

const cardTraySlice = createSlice({
  name: 'cardTray',
  initialState,
  reducers: {
    openCardTray: (state, action: PayloadAction<string>) => {
      state.open = true;
      state.nodeId = action.payload;
    },
    closeCardTray: state => {
      state.open = false;
    },
  },
});

export default cardTraySlice.reducer;

export const { closeCardTray, openCardTray } = cardTraySlice.actions;
