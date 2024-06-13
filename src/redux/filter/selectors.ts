import { StateFilter } from '../../type/Fiter';

export const filterSelector = (state: { filter: StateFilter }) =>
  state.filter.book;
