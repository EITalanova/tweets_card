import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers, updateUser } from './usersThunk';

const initialState = {
  users: [],
  page: 1,
  isLoading: false,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    increasePage: state => {
      state.page += 1;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchUsers.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        const newData = payload.data.filter(
          user => !state.users.some(u => u.id === user.id)
        );

        state.users.push(...newData);
        console.log(payload.data);
        state.isLoading = false;
      })
      .addCase(fetchUsers.rejected, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(updateUser.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        const index = state.users.findIndex(user => user.id === payload.id);
        if (index !== -1) {
          state.users[index] = payload;
        }
      })
      .addCase(updateUser.rejected, (state, { payload }) => {
        state.isLoading = false;
      }),
});

export const usersReducer = usersSlice.reducer;
export const { increasePage } = usersSlice.actions;
