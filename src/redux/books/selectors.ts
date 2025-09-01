import { StateBook } from '@/types/book.type';

export const booksSelector = (state: { books: StateBook }) => state.books.books;
export const currentPageSelector = (state: { books: StateBook }) =>
  state.books.page;
export const perPageSelector = (state: { books: StateBook }) =>
  state.books.perPage;
export const totalPageSelector = (state: { books: StateBook }) =>
  state.books.totalPages;
export const newBooksSelector = (state: { books: StateBook }) =>
  state.books.newBooks;
export const redBookSelector = (state: { books: StateBook }) =>
  state.books.redBook;
