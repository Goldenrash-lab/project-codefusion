import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { loginThunk, logoutThunk, registerThunk, refreshThunk } from './thunk';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: '',
    isLoggedIn: false,
    isRefresh: false,
    isLoading: false,
    isError: null,
    user: null,
  },
  reducers: {
    changeBalance: (state, { payload }) => {
      state.user.balance = state.user.balance + payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(logoutThunk.fulfilled, state => {
        state.user = null;
        // state.isLoggedIn = false;
        state.token = '';
        state.isLoading = false;
      })
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefresh = false;
      })
      .addCase(refreshThunk.pending, state => {
        state.isRefresh = true;
      })
      .addCase(refreshThunk.rejected, state => {
        state.isRefresh = false;
      })
      .addMatcher(
        isAnyOf(registerThunk.fulfilled, loginThunk.fulfilled),
        (state, { payload }) => {
          state.user = payload.user;
          state.token = payload.token;
          state.isLoggedIn = true;
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(loginThunk.pending, registerThunk.pending, logoutThunk.pending),
        state => {
          state.isLoading = true;
          state.isError = null;
        }
      )

      .addMatcher(
        isAnyOf(
          loginThunk.rejected,
          registerThunk.rejected,
          logoutThunk.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.isError = payload;
        }
      );
  },
});

export const { changeBalance } = authSlice.actions;
export const authReducer = authSlice.reducer;
