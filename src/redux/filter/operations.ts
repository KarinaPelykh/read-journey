import { instance } from '@/shared/api/Api';
import { MyKnownError } from '@/types/book.type';
import { createAsyncThunk } from '@reduxjs/toolkit';

type Credentials = {
  title: string;
  author: string;
};

export const getFilteredBook = createAsyncThunk<
  null,
  Credentials,
  { rejectValue: MyKnownError }
>('book/filter', async ({ title, author }, { rejectWithValue }) => {
  try {
    const { data } = await instance.get(
      `/books/recommend?title=${title}&author=${author}`
    );
    return data;
  } catch (error) {
    return rejectWithValue(error as MyKnownError);
  }
});
