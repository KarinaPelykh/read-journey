import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../service/Api";

export const getBook = createAsyncThunk(
  "book/byTitle",
  async ({ title, author }, { rejectWithValue }) => {
    console.log(title, author);
    try {
      const { data } = await instance.get(
        `/books/recommend?title=${title}&author=${author}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// export const getBookOwn = createAsyncThunk(
//   "book/bookStatus",
//   async ({ status }, { rejectWithValue }) => {
//     console.log("operTIN getBookStatus", status);
//     try {
//       const { data } = await instance.get("/books/own", { status });
//       console.log("operTIN getBookStatus", data);
//       return data;
//     } catch (error) {
//       return rejectWithValue.error.message;
//     }
//   }
// );
