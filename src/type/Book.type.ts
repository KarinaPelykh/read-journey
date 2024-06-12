export interface MyKnownError {
  errorMessage: string;
}
interface BookItem {
  author: string;
  _id: string;
  imageUrl: string;
  recommend: boolean;
  title: string;
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
  books: BooksArrayResponse[];
  newBooks: BooksArrayResponse[];
  redBook: BooksArrayResponse[];
  isLoading: boolean;
  error: string | unknown;
  page: number;
  perPage: number;
  totalPages: number;
}
