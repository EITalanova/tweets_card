import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://64ae5f78c85640541d4cef2e.mockapi.io/';

export const fetchUsers = createAsyncThunk(
  'users/users',
  async (page, thunkAPI) => {
    try {
      const res = await axios.get(`/user?completed=true&page=${page}&limit=3`);
      return { data: res.data };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  'user/updateUser',
  async ({ id, updateData }, thunkAPI) => {
    try {
      const res = await axios.put(`/user/${id}`, updateData)
     return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
