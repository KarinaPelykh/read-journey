import { createSlice } from "@reduxjs/toolkit";
import {
  addBooksWithRecommended,
  addNewBook,
  deleteBook,
  fetchBooks,
  getBookStatus,
} from "./operations";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
const pending = (state) => {
  state.isLoading = true;
  state.error = "";
};

const rejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const initialState = {
  books: [],
  newBooks: [],

  isLoading: false,
  error: null,
  page: 1,
  perPage: 10,
  totalPages: 0,
};

const bookSlice = createSlice({
  name: "book",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.books = action.payload;
      })
      .addCase(addBooksWithRecommended.fulfilled, (state, action) => {
        state.newBooks.push(action.payload);
        state.isLoading = false;
      })
      .addCase(addNewBook.fulfilled, (state, action) => {
        state.newBooks.push(action.payload);
      })
      .addCase(getBookStatus.fulfilled, (state, action) => {
        state.newBooks = action.payload;
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.newBooks = state.newBooks.filter(
          (newBooks) => newBooks._id !== action.payload
        );
      })

      .addMatcher((action) => action.type.endsWith("/pending"), pending)
      .addMatcher((action) => action.type.endsWith("/rejected"), rejected);
  },
});

const persistConfig = {
  key: "book",
  storage,
};
export const bookReducer = bookSlice.reducer;
export const persistedReducerBook = persistReducer(persistConfig, bookReducer);
