import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  loginThunk,
  logoutThunk,
  refreshThunk,
  registerThunk,
} from './Auth/thunk';
import {
  categoriesThunk,
  transactionsSummaryThunk,
} from './Categories/categoriesThunk';
import {
  addTransactionThunk,
  deleteTransactionThunk,
  fetchTransactionsThunk,
  updateTransactionThunk,
} from './Transactions/transactionsThunk';

const loadingSlice = createSlice({
  name: 'loader',
  initialState: {
    loading: false,
  },
  extraReducers: builder => {
    builder
      .addMatcher(
        isAnyOf(
          registerThunk.pending,
          loginThunk.pending,
          logoutThunk.pending,
          refreshThunk.pending,
          categoriesThunk.pending,
          transactionsSummaryThunk.pending,
          fetchTransactionsThunk.pending,
          addTransactionThunk.pending,
          updateTransactionThunk.pending,
          deleteTransactionThunk.pending
        ),
        state => {
          state.loading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          registerThunk.rejected,
          loginThunk.rejected,
          logoutThunk.rejected,
          refreshThunk.rejected,
          categoriesThunk.rejected,
          transactionsSummaryThunk.rejected,
          fetchTransactionsThunk.rejected,
          addTransactionThunk.rejected,
          updateTransactionThunk.rejected,
          deleteTransactionThunk.rejected
        ),
        state => {
          state.loading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          registerThunk.fulfilled,
          loginThunk.fulfilled,
          logoutThunk.fulfilled,
          refreshThunk.fulfilled,
          categoriesThunk.fulfilled,
          transactionsSummaryThunk.fulfilled,
          fetchTransactionsThunk.fulfilled,
          addTransactionThunk.fulfilled,
          updateTransactionThunk.fulfilled,
          deleteTransactionThunk.fulfilled
        ),
        state => {
          state.loading = false;
        }
      );
  },
});

export const loadingReducer = loadingSlice.reducer;
