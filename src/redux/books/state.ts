import { StateBook } from '../../type/Book.type';

export const initialState: StateBook = {
  books: {
    page: 1,
    perPage: 10,
    results: [],
    totalPages: 0,
  },
  newBooks: [],
  redBook: {
    author: '',
    createdAt: '',
    imageUrl: '',
    owner: '',
    progress: [],
    recommend: false,
    timeLeftToRead: { hours: null, minutes: null, seconds: null },
    status: '',
    title: '',
    totalPages: 0,
    updatedAt: '',
    _id: '',
  },
  isLoading: false,
  error: null,
  page: 1,
  perPage: 10,
  totalPages: 0,
};
