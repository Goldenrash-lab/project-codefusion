import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, setToken } from '../../api/api';

export const fetchTransactionsThunk = createAsyncThunk(
  'fetchTransactions',
  async (_, thunkApi) => {
    const savedToken = thunkApi.getState().auth.token;
    if (savedToken) {
      setToken(savedToken);
    } else {
      return thunkApi.rejectWithValue(`You're unauthorized`);
    }
    try {
      const { data } = await api.get('api/transactions');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteTransactionThunk = createAsyncThunk(
  'deleteTransaction',
  async (id, thunkApi) => {
    const savedToken = thunkApi.getState().auth.token;
    if (savedToken) {
      setToken(savedToken);
    } else {
      return thunkApi.rejectWithValue(`You're unauthorized`);
    }

    try {
      const { data } = await api.delete(`api/transactions/${id}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addTransactionThunk = createAsyncThunk(
  'addTransaction',
  async (newTransaction, thunkApi) => {
    const savedToken = thunkApi.getState().auth.token;
    if (savedToken) {
      setToken(savedToken);
    } else {
      return thunkApi.rejectWithValue(`You're unauthorized`);
    }
    try {
      const { data } = await api.post(`api/transactions`, newTransaction);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const updateTransactionThunk = createAsyncThunk(
  'updateTransaction',
  async ({ id, updatedTransaction }, thunkApi) => {
    const savedToken = thunkApi.getState().auth.token;
    if (savedToken) {
      setToken(savedToken);
    } else {
      return thunkApi.rejectWithValue(`You're unauthorized`);
    }
    try {
      const { data } = await api.patch(
        `api/transactions/${id}`,
        updatedTransaction
      );

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
