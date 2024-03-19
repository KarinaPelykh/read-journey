import { createSlice } from "@reduxjs/toolkit";
import { getBook, getBookStatus } from "../filter/operations";

const initialState = {
  book: [],
  status: [],
};
export const filterBook = createSlice({
  name: "filter",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getBook.fulfilled, (state, action) => {
        state.book = action.payload;
      })
      .addCase(getBookStatus.fulfilled, (state, action) => {
        state.status = action.payload;
      });
  },
});

export const filterReducer = filterBook.reducer;
