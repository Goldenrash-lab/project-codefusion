import { createSlice } from '@reduxjs/toolkit';
import {
  addTransactionThunk,
  deleteTransactionThunk,
  fetchTransactionsThunk,
  updateTransactionThunk,
} from './transactionsThunk';

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: {
    transactions: [],
    loading: false,
    error: '',
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTransactionsThunk.fulfilled, (state, action) => {
        state.transactions = action.payload;
        state.loading = false;
      })
      .addCase(deleteTransactionThunk.fulfilled, (state, action) => {
        state.transactions = state.transactions.filter(
          transaction => transaction.id !== action.payload
        );
      })
      .addCase(addTransactionThunk.fulfilled, (state, action) => {
        state.transactions.push(action.payload);
      })
      .addCase(updateTransactionThunk.fulfilled, (state, action) => {
        state.transactions = action.payload;
        state.loading = false;
      })
      .addCase(fetchTransactionsThunk.pending, state => {
        state.loading = true;
      })
      .addCase(updateTransactionThunk.pending, state => {
        state.loading = true;
      })
      .addCase(deleteTransactionThunk.pending, state => {
        state.loading = true;
      })
      .addCase(fetchTransactionsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteTransactionThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateTransactionThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const transactionsReducer = transactionsSlice.reducer;
