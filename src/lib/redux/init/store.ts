import { rootReducer } from './rootReducer';

import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeEnhancers, middleware } from './middleware';

// Створюємо store
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
