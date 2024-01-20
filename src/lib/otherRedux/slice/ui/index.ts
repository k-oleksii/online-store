import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthOpen: false,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setAuth: (state, { payload }) => {
      state.isAuthOpen = payload;
    },
  },
});

export const { setAuth } = uiSlice.actions;
export default uiSlice.reducer;
