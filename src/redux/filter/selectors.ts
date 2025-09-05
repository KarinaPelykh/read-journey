import { StateFilter } from '@/types/filter.type';

export const selectorFilter = (state: { filter: StateFilter }) =>
  state.filter.value;
