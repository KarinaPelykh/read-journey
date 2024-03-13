import { createSlice } from "@reduxjs/toolkit";
import { addBooksWithRecommended, fetchBooks } from "./operations";

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
      });
  },
});

export const bookReducer = bookSlice.reducer;
