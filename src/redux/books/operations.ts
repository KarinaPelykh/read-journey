import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  Book,
  BookResponse,
  BooksArrayResponse,
  Compatible,
  Credentials,
  CustomAxiosRequestConfig,
  IDBook,
  Id,
  MyKnownError,
} from '@/types/book.type';
import { instance } from '@/shared/api/Api';

export const fetchBooks = createAsyncThunk<
  BookResponse,
  Book,
  { rejectValue: MyKnownError }
>('books/fetchAll', async ({ page, limit }, { rejectWithValue }) => {
  try {
    const { data } = await instance.get(
      `/books/recommend?page=${page}&limit=${limit}`
    );
    return data;
  } catch (error) {
    return rejectWithValue(error as MyKnownError);
  }
});

export const addBooksWithRecommended = createAsyncThunk<
  BooksArrayResponse,
  Id,
  { rejectValue: MyKnownError }
>('book/addBooks', async ({ id }, { rejectWithValue }) => {
  try {
    const { data } = await instance.post(`/books/add/${id}`);

    return data;
  } catch (error) {
    return rejectWithValue(error as MyKnownError);
  }
});

export const addNewBook = createAsyncThunk<
  BooksArrayResponse,
  Credentials,
  { rejectValue: MyKnownError }
>(
  'book/addNewBook',
  async ({ title, author, totalPages }, { rejectWithValue }) => {
    try {
      const { data } = await instance.post('/books/add', {
        title,
        author,
        totalPages,
      });

      return data;
    } catch (error) {
      return rejectWithValue(error as MyKnownError);
    }
  }
);

export const deleteBook = createAsyncThunk<
  Id,
  Id,
  { rejectValue: MyKnownError }
>('book/deleteBook', async ({ id }, { rejectWithValue }) => {
  try {
    const { data } = await instance.delete(`/books/remove/${id}`);
    return data.id;
  } catch (error) {
    return rejectWithValue(error as MyKnownError);
  }
});
export const getBookOwn = createAsyncThunk<
  BooksArrayResponse[],
  CustomAxiosRequestConfig,
  { rejectValue: MyKnownError }
>('book/bookStatus', async ({ status }, { rejectWithValue }) => {
  try {
    const { data } = await instance.get(`/books/own`, {
      status,
    } as CustomAxiosRequestConfig);

    return data;
  } catch (error) {
    return rejectWithValue(error as MyKnownError);
  }
});
export const addReadBook = createAsyncThunk<
  BooksArrayResponse,
  Id,
  { rejectValue: MyKnownError }
>('book/addRead', async ({ id }, { rejectWithValue }) => {
  try {
    const { data } = await instance.get(`/books/${id}`);

    return data;
  } catch (error) {
    return rejectWithValue(error as MyKnownError);
  }
});
export const startReading = createAsyncThunk<
  BooksArrayResponse,
  Compatible,
  { rejectValue: MyKnownError }
>('book/startReading', async ({ id, page }, { rejectWithValue }) => {
  try {
    const { data } = await instance.post('/books/reading/start', {
      id,
      page,
    });
    return data;
  } catch (error) {
    return rejectWithValue(error as MyKnownError);
  }
});
export const finishedReading = createAsyncThunk<
  BooksArrayResponse,
  Compatible,
  { rejectValue: MyKnownError }
>('book/finishedReading', async ({ id, page }, { rejectWithValue }) => {
  try {
    const { data } = await instance.post('/books/reading/finish', {
      id,
      page,
    });
    return data;
  } catch (error) {
    return rejectWithValue(error as MyKnownError);
  }
});
export const deleteProgress = createAsyncThunk<
  BooksArrayResponse,
  IDBook,
  { rejectValue: MyKnownError }
>('book/deleteProgress', async ({ bookId, readingId }, { rejectWithValue }) => {
  try {
    const { data } = await instance.delete(
      `/books/reading?bookId=${bookId}&readingId=${readingId}`
    );
    return data;
  } catch (error) {
    return rejectWithValue(error as MyKnownError);
  }
});
