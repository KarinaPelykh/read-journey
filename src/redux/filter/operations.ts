import { instance } from '@/shared/api/Api';
import { MyKnownError } from '@/types/book.type';
import { createAsyncThunk } from '@reduxjs/toolkit';

interface Credentals {
  title: string;
  author: string;
}
export const getBook = createAsyncThunk<
  null,
  Credentals,
  { rejectValue: MyKnownError }
>('book/byTitle', async ({ title, author }, { rejectWithValue }) => {
  try {
    const { data } = await instance.get(
      `/books/recommend?title=${title}&author=${author}`
    );
    return data;
  } catch (error) {
    return rejectWithValue(error as MyKnownError);
  }
});
