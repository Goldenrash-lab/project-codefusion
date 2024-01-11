import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from 'api/api';

export const fetchTransactionsThunk = createAsyncThunk(
  'fetchTransactions',
  async (_, thunkApi) => {
    try {
      const { data } = await api.get('/api/transactions');
      console.log(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteTransactionThunk = createAsyncThunk(
  'deleteTransaction',
  async (id, thunkApi) => {
    try {
      const { data } = await api.delete(`/api/transactions${id}`);
      console.log(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addTransactionThunk = createAsyncThunk(
  'addTransaction',
  async (newTransaction, thunkApi) => {
    try {
      const { data } = await api.post(`/api/transactions`, newTransaction);
      console.log(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const updateTransactionThunk = createAsyncThunk(
  'addTransaction',
  async (id, thunkApi) => {
    try {
      const { data } = await api.patch(`/api/transactions${id}`);
      console.log(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
