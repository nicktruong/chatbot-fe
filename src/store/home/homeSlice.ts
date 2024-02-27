import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    tabIndex: 0,
    sidebarOpen: false,
  },
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
