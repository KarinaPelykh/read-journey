import { StateFilter } from '@/types/filter.type';

export const filterSelector = (state: { filter: StateFilter }) =>
  state.filter.book;
