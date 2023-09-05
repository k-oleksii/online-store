import { combineReducers } from 'redux';
import { headerReducer as header, uiReducer as ui } from '../reducers';
// За допомогою функції combineReducers ми створюємо rootReducer

export const rootReducer = combineReducers({
  header,
  ui,
  // Передаємо наші редьюсери
});
