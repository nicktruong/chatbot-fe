import { createSlice } from '@reduxjs/toolkit';

const cardTraySlice = createSlice({
  name: 'cardTray',
  initialState: {
    open: false,
  },
  reducers: {
    openCardTray: state => {
      state.open = true;
    },
    closeCardTray: state => {
      state.open = false;
    },
  },
});

export default cardTraySlice.reducer;

export const { closeCardTray, openCardTray } = cardTraySlice.actions;
