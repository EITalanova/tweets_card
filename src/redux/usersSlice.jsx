import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from './usersThunk';

const initialState = {
  users: [],
  isLoading: false,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(fetchUsers.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        state.users = payload.data;
        console.log(payload.data);
        state.isLoading = false;
      })
      .addCase(fetchUsers.rejected, (state, { payload }) => {
        state.isLoading = false;
      }),
});

export const usersReducer = usersSlice.reducer;
