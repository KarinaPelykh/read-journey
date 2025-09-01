import { MyKnownError } from '@/types/book.type';
import { StateFilter } from '@/types/filter.type';
import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';
import { getBook } from './operations';

const pending = (state: StateFilter) => {
  state.isLoading = true;
  state.error = '';
};

const rejected = (
  state: StateFilter,
  action: PayloadAction<MyKnownError | unknown>
) => {
  state.isLoading = false;
  state.error = action.payload;
};
const initialState: StateFilter = {
  book: null,
  error: null,
  isLoading: false,
};
export const filterBook = createSlice({
  name: 'filter',
  initialState,
  reducers: {},
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
