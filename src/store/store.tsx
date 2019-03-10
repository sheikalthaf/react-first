import { createStore, Action } from 'redux';
import { rotateReducer } from './reducers/rotateReducer';

export class AppState {
  rotating = true;
}

export function configureStore(state = new AppState()) {
  return createStore<AppState, any, any, any>(rotateReducer, state);
}
