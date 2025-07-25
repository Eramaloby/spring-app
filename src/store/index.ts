import { createStore } from 'redux';
import { rootReducer } from './reducers';
//import { type RootState } from './types';

export const store = createStore(rootReducer);

export type AppDispatch = typeof store.dispatch;
