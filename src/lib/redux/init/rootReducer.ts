import { combineReducers } from 'redux';
import { headerReducer as header } from '../reducers';
// За допомогою функції combineReducers ми створюємо rootReducer

export const rootReducer = combineReducers({
  header,
  // Передаємо наші редьюсері
});
