import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../service/Api';
import { MyKnownError } from '../../type/Book.type';
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
