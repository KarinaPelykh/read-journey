import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  logOutThunk,
  loginThunk,
  refreshThunk,
  registerThunk,
} from "./operations";
const pending = (state) => {
  state.loading = true;
  state.error = "";
};
const rejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};
const initialState = {
  user: {
    name: "",
    email: "",
  },
  token: "",
  error: null,
  loading: false,
  isLoggedIn: false,
  isRefresh: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder

      .addCase(logOutThunk.fulfilled, (state) => {
        (state.user = {
          name: "",
          email: "",
        }),
          (state.token = ""),
          (state.isLoggedIn = false);
      })
      .addCase(refreshThunk.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefresh = false;
      })
      .addCase(refreshThunk.pending, (state) => {
        state.isRefresh = true;
      })
      .addCase(refreshThunk.rejected, (state) => {
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
