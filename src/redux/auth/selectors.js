import { createSelector } from "@reduxjs/toolkit";

export const userNameSelect = createSelector(
  [(state) => state.auth.user],
  (user) => user
);

export const isLoggedInSelect = (state) => state.auth.isLoggedIn;
export const refresh = (state) => state.auth.isRefresh;
