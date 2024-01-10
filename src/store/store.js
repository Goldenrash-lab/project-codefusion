import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './Auth/slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
