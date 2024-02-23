import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    tabIndex: 0,
  },
  reducers: {
    setTabIndex: (state, action: PayloadAction<number>) => {
      state.tabIndex = action.payload;
    },
  },
});

export const { setTabIndex } = homeSlice.actions;

export default homeSlice.reducer;
