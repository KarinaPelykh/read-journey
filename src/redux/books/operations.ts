import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../service/Api';
import { MyKnownError } from '../../type/Book.type';
export interface Book {
  page: string | number;
  limit: number;
}
export type Id = {
  id: string | null;
};
export interface Compatible extends Id, Pick<Book, 'page'> {}
export interface IDBook {
  bookId: string;
  readingId: string;
}
export interface BookResponse {
  page: string | number;
  perPage: number;
  results: [];
  totalPages: number;
}
export interface BooksArrayResponse {
  author: string;
  createdAt: string;
  imageUrl: string;
  owner: string;
  progress: [];
  recommend: false;
  status: string;
  title: string;
  totalPages: number;
  updatedAt: string;
  _id: string;
}
type Credentals = Pick<BooksArrayResponse, 'title' | 'author' | 'totalPages'>;
type Status = {
  status: string;
};
export const fetchBooks = createAsyncThunk<
  BookResponse,
  Book,
  { rejectValue: MyKnownError }
>('books/fetchAll', async ({ page, limit }, { rejectWithValue }) => {
  try {
    const { data } = await instance.get(
      `/books/recommend?page=${page}&limit=${limit}`
    );
    console.log('data555', data);

    return data;
  } catch (error) {
    return rejectWithValue(error as MyKnownError);
  }
});

export const addBooksWithRecommended = createAsyncThunk<
  BookResponse,
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
  Credentals,
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
>('book/deleteBook', async (id, { rejectWithValue }) => {
  try {
    await instance.delete(`/books/remove/${id}`);
    return id;
  } catch (error) {
    return rejectWithValue(error as MyKnownError);
  }
});
export const getBookOwn = createAsyncThunk<
  BooksArrayResponse,
  Status,
  { rejectValue: MyKnownError }
>('book/bookStatus', async ({ status }, { rejectWithValue }) => {
  try {
    const { data } = await instance.get('/books/own', { status });

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
    console.log('data', data);
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
