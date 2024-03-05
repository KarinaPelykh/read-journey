import { createAsyncThunk } from "@reduxjs/toolkit";
// import { instance } from "../../service/Api";

export const fetchBooks = createAsyncThunk(
  "books/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      // const { data } = await instance.get("/books/recommend");
      // return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
