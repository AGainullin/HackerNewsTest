import { NewsState, NewsActionTypes, NewsAction } from '../../types/news';
import produce from 'immer';

const initialState: NewsState = {
  news: [],
  uiState: {
    isLoading: false,
    error: null,
  },
};

export const newsReducer = produce(
  (draft = initialState, action: NewsAction): NewsState => {
    const { type, payload } = action;
    switch (type) {
      case NewsActionTypes.LOADING:
        draft.uiState.isLoading = payload;
        return draft;
      case NewsActionTypes.FETCH_NEWS:
        draft.news = payload;
        return draft;
      case NewsActionTypes.ERROR:
        draft.uiState.error = payload;
        return draft;
      default:
        return draft;
    }
  }
);
