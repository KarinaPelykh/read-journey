import { MyKnownError } from '@/types/book.type';
import { StateFilter } from '@/types/filter.type';
import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';
import { getFilteredBook } from './operations';

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
  value: '',
  error: null,
  isLoading: false,
};

export const filterBook = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    resetFilter: state => {
      state.value = '';
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getFilteredBook.fulfilled, (state, action) => {
        state.value = action.meta.arg.title;
      })
      .addMatcher(isAnyOf(getFilteredBook.pending), pending)
      .addMatcher(isAnyOf(getFilteredBook.rejected), rejected);
  },
});

export const { resetFilter } = filterBook.actions;
export const filterReducer = filterBook.reducer;
