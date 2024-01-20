import { instance } from '@/hooks/axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { selectAccessToken } from '../../selectors';
import { setToken } from '../auth';

export const currentUserThunk = createAsyncThunk(
  'user/getInfo',
  async (_, { rejectWithValue }) => {
    const token = useSelector(selectAccessToken);
    try {
      setToken(token);
      const currentUser = await instance('users/me');
      return currentUser.data;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const addToFavoritesThunk = createAsyncThunk(
  'user/addToFavorites',
  async (id, { rejectWithValue }) => {
    const token = useSelector(selectAccessToken);
    try {
      setToken(token);
      const currentUserInfo = await instance.patch('users/me', id);
      return currentUserInfo.data;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);