import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


axios.defaults.baseURL = 'https://64ae5f78c85640541d4cef2e.mockapi.io/';

export const fetchUsers = createAsyncThunk(
  'users/users',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`/user`);
      console.log({ data: res.data });
      console.log({ data: res.data.data });
      return { data: res.data };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
