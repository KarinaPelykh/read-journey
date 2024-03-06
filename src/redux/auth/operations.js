import { createAsyncThunk } from "@reduxjs/toolkit";
import { clear, instance, setToken } from "../../service/Api";

export const registerThunk = createAsyncThunk(
  "auth/register",

  async (userinfo, { rejectWithValue }) => {
    console.log("userinfo", userinfo);
    try {
      const { data } = await instance.post("/users/signup", userinfo);
      setToken(data.token);
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
      setToken(data.token);
      console.log("data", data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logOutThunk = createAsyncThunk(
  "auth/logOut",
  async (_, { rejectWithValue }) => {
    try {
      await instance.post("/users/signout");
      clear();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
