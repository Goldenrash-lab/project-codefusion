import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoading: false,
    error: null,
    user: null,
  },
  extraReducers: builder => {},
});

export const authReducer = authSlice.reducer;
