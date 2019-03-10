import { createStore } from 'redux';
import { rotateReducer } from './reducer';

export class AppState {
  rotating = true;
}

export function counterStore(state = new AppState()) {
  return createStore<AppState, any, any, any>(rotateReducer, state);
}
