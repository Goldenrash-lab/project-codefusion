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
  reducers: {
    deleteTransaction: (state, action) => {
      state.transactions = state.transactions.filter(
        transaction => transaction.id !== action.payload
      );
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTransactionsThunk.fulfilled, (state, action) => {
        state.transactions = action.payload;
        state.loading = false;
      })
      .addCase(deleteTransactionThunk.fulfilled, (state, action) => {
        state.transactions = state.transactions.filter(
          transaction => transaction.id !== action.payload.id
        );
      })
      .addCase(addTransactionThunk.fulfilled, (state, action) => {
        state.transactions.unshift(action.payload);
      })
      .addCase(updateTransactionThunk.fulfilled, (state, action) => {
        const index = state.transactions.findIndex(
          transaction => transaction.id === action.payload.id
        );
        if (index !== -1) {
          state.transactions[index] = action.payload;
        }
        state.loading = false;
      })
      .addCase(fetchTransactionsThunk.pending, state => {
        state.loading = true;
      })
      .addCase(updateTransactionThunk.pending, state => {
        state.loading = true;
      })
      .addCase(addTransactionThunk.pending, state => {
        state.loading = true;
      })
      .addCase(deleteTransactionThunk.pending, state => {
        state.loading = true;
      })
      .addCase(fetchTransactionsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addTransactionThunk.rejected, (state, action) => {
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

export const { deleteTransaction } = transactionsSlice.actions;

export const transactionsReducer = transactionsSlice.reducer;
