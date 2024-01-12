import { createSlice } from '@reduxjs/toolkit';
import { categoriesThunk } from './categoriesThunk';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    isLoading: false,
    isError: null,
    categories: [],
  },
  extraReducers: builder => {
    builder
      .addCase(categoriesThunk.fulfilled, (state, { payload }) => {
        state.categories = payload;
        state.isLoading = false;
      })
      .addCase(categoriesThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(categoriesThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      });
  },
});

export const categoriesReducer = categoriesSlice.reducer;
