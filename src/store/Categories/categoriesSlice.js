import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    isLoading: false,
    isError: null,
    categories: [],
  },
  extraReducers: builder => {
    builder.addCase();
  },
});
