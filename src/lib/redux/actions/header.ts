import { types } from '../types';

export const headerActions = Object.freeze({
  setIsSearchOpen: (isSearchOpen: boolean) => {
    return {
      type: types.SET_SEARCH_OPEN,
      payload: isSearchOpen,
    };
  },
});
