import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk(
  'users/users',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`/users`);
      return { data: res.data };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
