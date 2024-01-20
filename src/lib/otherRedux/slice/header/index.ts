import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSearchOpen: false,
};

export const headerSlice = createSlice({
  name: 'headerSeach',
  initialState,
  reducers: {
    setSearch: (state, { payload }) => {
      state.isSearchOpen = payload;
    },
  },
});

export const { setSearch } = headerSlice.actions;
export default headerSlice.reducer;
