import { AnyAction } from 'redux';
import { types } from '../types';

const initialState = {
  isSearchOpen: false,
};

export const headerReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case types.SET_SEARCH_OPEN: {
      return {
        ...state,
        isSearchOpen: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};
