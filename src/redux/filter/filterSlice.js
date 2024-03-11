import { createSlice } from "@reduxjs/toolkit";
import { getBook } from "../filter/operations";

const initialState = {
  book: [],
};
export const filterBook = createSlice({
  name: "filter",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getBook.fulfilled, (state, action) => {
      state.book = action.payload;
    });
  },
});

export const filterReducer = filterBook.reducer;
