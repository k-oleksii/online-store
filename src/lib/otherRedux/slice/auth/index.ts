import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from '../../thunks/auth';

const initialState = {
  accessToken: null,
  isLogged: false,
  isLoading: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(loginUser.pending, (state, action) => {
      state.isLogged = false;
      state.isLoading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.accessToken = action.payload.data.accessToken;
      state.isLogged = true;
      state.isLoading = false;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLogged = false;
      state.isLoading = false;
    });
  },
});

export default authSlice.reducer;
