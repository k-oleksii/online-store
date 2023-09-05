import { types } from '../types';

export const uiActions = Object.freeze({
  setIsSearchOpen: (isAuthOpen: boolean) => {
    return {
      type: types.SET_AUTH_OPEN,
      payload: isAuthOpen,
    };
  },
});
