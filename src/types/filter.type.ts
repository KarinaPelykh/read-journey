export interface Results {
  author: string;
  _id: string;
  imageUrl: string;
  recommend: boolean;
  title: string;
  totalPages: number;
}
export interface ItemBookFilter {
  page: number | string;
  perPage: number;
  results: Results[];
  totalPages: number;
}

export interface StateFilter {
  book: ItemBookFilter | null;
  error: string | null | unknown;
  isLoading: boolean;
}
