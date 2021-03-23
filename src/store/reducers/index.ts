import { combineReducers } from 'redux';
import { newsReducer } from './news-reducer';

export const rootReducer = combineReducers({
  newsPage: newsReducer,
});

export type RootReducerType = ReturnType<typeof rootReducer>;
