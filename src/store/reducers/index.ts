import { combineReducers } from 'redux';
import { newsReducer } from './news-reducer';

export const rootReducer = combineReducers({
  news: newsReducer,
});

export type RootReducerType = ReturnType<typeof rootReducer>;
