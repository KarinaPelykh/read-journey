import { PayloadAction, createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  logOutThunk,
  loginThunk,
  refreshThunk,
  registerThunk,
} from './operations';
import { MyKnownError, State, StateFunction } from '../../type/Auth.type';
const pending = (state: StateFunction) => {
  state.loading = true;
  state.error = '';
};
const rejected = (
  state: StateFunction,
  action: PayloadAction<MyKnownError | unknown>
) => {
  state.loading = false;
  state.error = action.payload;
  state.isRefresh = false;
};
const initialState: State = {
  user: {
    name: '',
    email: '',
  },
  token: '',
  error: null,
  loading: false,
  isLoggedIn: false,
  isRefresh: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder

      .addCase(logOutThunk.fulfilled, state => {
        (state.user = {
          name: '',
          email: '',
        }),
          (state.token = ''),
          (state.isLoggedIn = false);
      })
      .addCase(refreshThunk.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefresh = false;
      })
      .addMatcher(
        isAnyOf(loginThunk.fulfilled, registerThunk.fulfilled),
        (state, action) => {
          state.user = action.payload;
          state.token = action.payload.token;
          state.isLoggedIn = true;
          state.loading = false;
        }
      )

      .addMatcher(
        isAnyOf(loginThunk.pending, registerThunk.pending, logOutThunk.pending),
        pending
      )
      .addMatcher(
        isAnyOf(
          loginThunk.rejected,
          registerThunk.rejected,
          logOutThunk.rejected
        ),
        rejected
      );
  },
});

export const authReducer = authSlice.reducer;
