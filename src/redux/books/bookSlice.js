import { createSlice } from "@reduxjs/toolkit";
import { fetchBooks } from "./operations";

const initialState = {
  books: [],
  isLoading: false,
  error: null,
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.books = action.payload;
    });
  },
});

export const bookReducer = bookSlice.reducer;
