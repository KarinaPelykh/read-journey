export interface MyKnownError {
  errorMessage: string;
}

export interface Progress {
  finishPage: number;
  finishReading: string;
  speed: number;
  startPage: number;
  startReading: string;
  status: 'inactive' | 'active';
  _id: string;
}
export interface BookItem {
  author: string;
  _id: string;
  imageUrl: string;
  recommend: boolean;
  title: string;
  totalPages: number;
}

export interface INformationAboutReding {
  page: number;
  perPage: number;
  results: BookItem[];
  totalPages: number;
}

export interface ReadBook {
  author: string;
  imageUrl: string;
  owner: string;
  progress: Progress[];
  status: string;
  timeLeftToRead: { hours: null; minutes: null; seconds: null };
  title: string;
  totalPages: number;
  _id: string;
}
interface BooksArrayResponse {
  author: string;
  createdAt: string;
  imageUrl: string;
  owner: string;
  progress: BookItem[];
  recommend: false;
  status: string;
  title: string;
  totalPages: number;
  updatedAt: string;
  _id: string;
}
export interface StateBook {
  books: INformationAboutReding;
  newBooks: BooksArrayResponse[];
  redBook: ReadBook;
  isLoading: boolean;
  error: string | null | unknown;
  page: string | number;
  perPage: number;
  totalPages: number;
}
