import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../service/Api";

export const registerThunk = createAsyncThunk(
  "auth/register",

  async (userinfo, { rejectWithValue }) => {
    console.log("userinfo", userinfo);
    try {
      const { data } = await instance.post("/users/signup", userinfo);
      console.log("data", data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (userinfo, { rejectWithValue }) => {
    console.log("userinfo", userinfo);
    try {
      const { data } = await instance.post("/users/signin", userinfo);
      console.log("data", data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
