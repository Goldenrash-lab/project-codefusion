import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, setToken } from '../../api/api';

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (credentials, thunkApi) => {
    try {
      const { data } = await api.post('api/auth/sign-up', credentials);
      setToken(data.token);
      console.log(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const signInThunk = createAsyncThunk(
  'auth/signIn',
  async (credentials, thunkApi) => {
    try {
      const { data } = await api.post('api/auth/signIn', credentials);
      setToken(data.token);
      console.log(data);
      return data;
    } catch (error) {
      console.error('Error during sign in:', error);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
