import { createSlice } from '@reduxjs/toolkit';
import {
  addToFavoritesThunk,
  currentUserThunk,
} from '../../thunks/user';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
    cart: [],
    isLoading: false,
    isOnline: false,
    error: null,
  },
  reducers: {
    addItemToCart: (state, { payload }) => {
      let newCart = [...state.cart];
      const found = state.cart.find(({ id }) => id === payload.id);

      if (found) {
        newCart = newCart.map(item => {
          return item.id === payload.id
            ? { ...item, quantity: payload.quantity || item.quantity + 1 }
            : item;
        });
      } else newCart.push({ ...payload, quantity: 1 });
      state.cart = newCart;
    },
    removeItemFromCart: (state, { payload }) => {
      state.cart = state.cart.filter(({ id }) => id !== payload);
    },
  },
  extraReducers: builder => {
    builder.addCase(currentUserThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(currentUserThunk.fulfilled, (state, action) => {
      state.currentUser = action.payload;
    });
    builder.addCase(currentUserThunk.rejected, (state, action) => {
      state.error = action.payload;
      state.isOnline = false;
      state.isLoading = false;
    });
    builder.addCase(addToFavoritesThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addToFavoritesThunk.fulfilled, (state, action) => {
      state.currentUser = action.payload;
      state.isLoading = false;
    });
    builder.addCase(addToFavoritesThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { addItemToCart, removeItemFromCart } = userSlice.actions;

export default userSlice.reducer;
