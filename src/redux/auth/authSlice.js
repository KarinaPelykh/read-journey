import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { logOutThunk, loginThunk, registerThunk } from "./operations";
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
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.user = action.payload;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.loading = false;
      })
      .addCase(logOutThunk.fulfilled, (state) => {
        (state.user = {
          name: "",
          email: "",
        }),
          (state.token = ""),
          (state.isLoggedIn = false);
      })
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
