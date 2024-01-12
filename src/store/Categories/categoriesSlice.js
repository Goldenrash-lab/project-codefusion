import { createSlice } from '@reduxjs/toolkit';
import { categoriesThunk, transactionsSummaryThunk } from './categoriesThunk';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    isLoading: false,
    isError: null,
    categories: [],
    summary: null,
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
      })
      .addCase(transactionsSummaryThunk.fulfilled, (state, { payload }) => {
        state.summary = payload;
        state.isLoading = false;
      })
      .addCase(transactionsSummaryThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(transactionsSummaryThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      });
  },
});

export const categoriesReducer = categoriesSlice.reducer;
