import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, setToken } from '../../api/api';

export const categoriesThunk = createAsyncThunk(
  'categories/get',
  async (_, thunkApi) => {
    const savedToken = thunkApi.getState().auth.token;
    if (savedToken) {
      setToken(savedToken);
    } else {
      return thunkApi.rejectWithValue(`You're unauthorized`);
    }

    try {
      const response = await api.get('api/transaction-categories');
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const transactionsSummaryThunk = createAsyncThunk(
  'categoriesSummary/get',
  async (_, thunkApi) => {
    const savedToken = thunkApi.getState().auth.token;
    if (savedToken) {
      setToken(savedToken);
    } else {
      return thunkApi.rejectWithValue(`You're unauthorized`);
    }

    try {
      const response = await api.get('api/transactions-summary');
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
