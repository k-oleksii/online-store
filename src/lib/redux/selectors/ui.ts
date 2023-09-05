import { RootState } from '../init/store';

export const getAuthOpen = (state: RootState): boolean => {
  return state.ui.isAuthOpen;
};
