import { AxiosRequestConfig } from 'axios';

export interface MyKnownError {
  errorMessage: string;
}

export interface Book {
  page: string | number;
  limit: number;
}
export type Id = {
  id: string;
};

export interface Compatible extends Id, Pick<Book, 'page'> {}

export interface IDBook {
  bookId: string;
  readingId: string;
}

export type Credentials = Pick<
  BooksArrayResponse,
  'title' | 'author' | 'totalPages'
>;
// status Sort
export interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  status?: string;
}
// object with books
export interface BookResponse {
  page: number;
  perPage: number;
  results: [];
  totalPages: number;
}
// array in BooksArrayResponse
export interface Progress {
  progressReading: string;
  finishPage: number;
  finishReading: string;
  speed: number;
  startPage: number;
  startReading: string;
  status: 'inactive' | 'active';
  _id: string;
}
// Response
export interface BooksArrayResponse {
  author: string;
  createdAt?: string;
  imageUrl: string;
  owner: string;
  progress: Progress[];
  recommend?: false;
  timeLeftToRead?: { hours: null; minutes: null; seconds: null };
  status: string;
  title: string;
  totalPages: number;
  updatedAt?: string;
  _id: string;
}
// State
export interface StateBook {
  books: BookResponse;
  // newBooks: [];
  newBooks: BooksArrayResponse[];
  redBook: BooksArrayResponse;
  isLoading: boolean;
  error: string | null | unknown;
  page: number;
  perPage: number;
  totalPages: number;
}
