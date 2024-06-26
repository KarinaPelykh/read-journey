import { State } from '../../type/Auth.type';

export const userNameSelect = (state: { auth: State }) => state.auth.user;
export const isLoggedInSelect = (state: { auth: State }) =>
  state.auth.isLoggedIn;
export const refresh = (state: { auth: State }) => state.auth.isRefresh;
