import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import type { HomeState } from './interfaces';

const initialState: HomeState = {
  tabIndex: 0,
  sidebarOpen: false,
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setTabIndex: (state, action: PayloadAction<number>) => {
      state.tabIndex = action.payload;
    },
    toggleSidebar: state => {
      state.sidebarOpen = !state.sidebarOpen;
    },
  },
});

export const { setTabIndex, toggleSidebar } = homeSlice.actions;

export default homeSlice.reducer;
