import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getBook } from '../filter/operations';
const pending = state => {
  state.isLoading = true;
  state.error = '';
};

const rejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const initialState = {
  book: [],
  error: null,
  loading: false,
};
export const filterBook = createSlice({
  name: 'filter',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getBook.fulfilled, (state, action) => {
        state.book = action.payload;
      })
      .addMatcher(isAnyOf(getBook.pending), pending)
      .addMatcher(isAnyOf(getBook.rejected), rejected);
  },
});

export const filterReducer = filterBook.reducer;
