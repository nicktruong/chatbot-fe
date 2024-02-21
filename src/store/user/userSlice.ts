import { createSlice } from '@reduxjs/toolkit';

import { UserRole } from 'enums';

import type { UserInfo } from 'interfaces';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: UserInfo = {
  id: '',
  name: '',
  email: '',
  createdAt: '',
  updatedAt: '',
  role: UserRole.CUSTOMER,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserInfo>) => {
      return action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
