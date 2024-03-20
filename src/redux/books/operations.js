import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../service/Api";

export const fetchBooks = createAsyncThunk(
  "books/fetchAll",
  async ({ page }, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`/books/recommend?page=${page}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addBooksWithRecommended = createAsyncThunk(
  "book/addBooks",
  async ({ id }, { rejectWithValue }) => {
    try {
      const { data } = await instance.post(`/books/add/${id}`);

      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue.error.message;
    }
  }
);

export const addNewBook = createAsyncThunk(
  "book/addNewBook",
  async ({ title, author, totalPages }, { rejectWithValue }) => {
    try {
      const { data } = await instance.post("/books/add", {
        title,
        author,
        totalPages,
      });
      return data;
    } catch (error) {
      return rejectWithValue.error.message;
    }
  }
);

export const deleteBook = createAsyncThunk(
  "book/deleteBook",
  async (id, { rejectWithValue }) => {
    console.log(id);
    try {
      await instance.delete(`/books/remove/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue.error.message;
    }
  }
);
export const addReadBook = createAsyncThunk(
  "book/addRead",
  async ({ id }, { rejectWithValue }) => {
    console.log("addReadBook", id);
    try {
      const { data } = await instance.get(`/books/${id}`);
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue.error.message;
    }
  }
);
export const startReading = createAsyncThunk(
  "book/startReading",
  async ({ id, page }, { rejectWithValue }) => {
    console.log({ id, page });
    try {
      const { data } = await instance.post("/books/reading/start", {
        id,
        page,
      });
      console.log("startReading", data);
      return data;
    } catch (error) {
      return rejectWithValue.error.message;
    }
  }
);
export const finishedReading = createAsyncThunk(
  "book/finishedReading",
  async ({ id, page }, { rejectWithValue }) => {
    console.log({ id, page });
    try {
      const { data } = await instance.post("/books/reading/finish", {
        id,
        page,
      });
      console.log("finishedReading", data);
      return data;
    } catch (error) {
      return rejectWithValue.error.message;
    }
  }
);
