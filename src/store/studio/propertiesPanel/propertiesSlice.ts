import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const propertiesSlice = createSlice({
  name: 'properties',
  initialState: {
    cardId: '',
  },
  reducers: {
    setCardId: (state, action: PayloadAction<string>) => {
      state.cardId = action.payload;
    },
  },
});

export default propertiesSlice.reducer;

export const { setCardId } = propertiesSlice.actions;
