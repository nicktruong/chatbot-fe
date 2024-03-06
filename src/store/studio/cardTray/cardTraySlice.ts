import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const cardTraySlice = createSlice({
  name: 'cardTray',
  initialState: {
    nodeId: '',
    open: false,
  },
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
