import { configureStore } from "@reduxjs/toolkit";
import { bookReducer } from "./books/bookSlice";
import { authReducer } from "./auth/authSlice";

export const store = configureStore({
  reducer: {
    books: bookReducer,
    auth: authReducer,
  },
});
