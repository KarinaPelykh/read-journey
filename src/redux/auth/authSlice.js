import { createSlice } from "@reduxjs/toolkit";

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
});

export const authReducer = authSlice.reducer;
