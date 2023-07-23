import { RootState } from '../init/store';

export const getSearchOpen = (state: RootState): boolean => {
  return state.header.isSearchOpen;
};
