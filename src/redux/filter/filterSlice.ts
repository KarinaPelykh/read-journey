import { PayloadAction, createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getBook } from './operations.js';
import { StateFilter } from '../../type/Fiter.js';
import { MyKnownError } from '../../type/Book.type.js';
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
