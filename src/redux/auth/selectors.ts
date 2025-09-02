import { State } from '@/types/auth.type';

export const userNameSelect = (state: { auth: State }) => state.auth.user.name;
export const isLoggedInSelect = (state: { auth: State }) =>
  state.auth.isLoggedIn;
export const refresh = (state: { auth: State }) => state.auth.isRefresh;
