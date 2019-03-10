import { Dispatch, Action } from 'redux';

export interface oDispatch<T> extends Dispatch<Action<T>> {}
