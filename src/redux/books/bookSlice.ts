import { PayloadAction, createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addBooksWithRecommended,
  addNewBook,
  addReadBook,
  deleteBook,
  deleteProgress,
  fetchBooks,
  finishedReading,
  getBookOwn,
  startReading,
} from './operations';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { MyKnownError, StateBook } from '@/types/book.type';
import { initialState } from './state';
const pending = (state: StateBook) => {
  state.isLoading = true;
  state.error = '';
};

const rejected = (
  state: StateBook,
  action: PayloadAction<MyKnownError | unknown>
) => {
  state.isLoading = false;
  state.error = action.payload;
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {},
  extraReducers: builder => {
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

      .addCase(deleteBook.fulfilled, (state, action) => {
        state.newBooks = state.newBooks.filter(
          newBooks => newBooks._id !== action.payload
        );
      })
      .addCase(getBookOwn.fulfilled, (state, action) => {
        state.newBooks = action.payload;
      })
      .addCase(addReadBook.fulfilled, (state, action) => {
        state.redBook = action.payload;
      })
      .addCase(startReading.fulfilled, (state, action) => {
        state.redBook = action.payload;
      })
      .addCase(finishedReading.fulfilled, (state, action) => {
        state.redBook = action.payload;
      })
      .addCase(deleteProgress.fulfilled, (state, action) => {
        state.redBook = action.payload;
      })
      .addMatcher(
        isAnyOf(
          fetchBooks.pending,
          addBooksWithRecommended.pending,
          addNewBook.pending,
          deleteBook.pending,
          getBookOwn.pending,
          addReadBook.pending,
          startReading.pending,
          finishedReading.pending,
          deleteProgress.pending
        ),
        pending
      )
      .addMatcher(
        isAnyOf(
          fetchBooks.rejected,
          addBooksWithRecommended.rejected,
          addNewBook.rejected,
          deleteBook.rejected,
          getBookOwn.rejected,
          addReadBook.rejected,

          startReading.rejected,
          finishedReading.rejected,
          deleteProgress.rejected
        ),
        rejected
      );
  },
});

const persistConfig = {
  key: 'book',
  storage,
};
export const bookReducer = bookSlice.reducer;
export const persistedReducerBook = persistReducer(persistConfig, bookReducer);
