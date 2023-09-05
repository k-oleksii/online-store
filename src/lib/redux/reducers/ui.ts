import { AnyAction } from 'redux';
import { types } from '../types';

const initialState = {
  isAuthOpen: false,
};

export const uiReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case types.SET_AUTH_OPEN: {
      return {
        ...state,
        isAuthOpen: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};
