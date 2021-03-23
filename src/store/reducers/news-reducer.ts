import { NewsState, NewsActionTypes, NewsAction } from '../../types/news';

const initialState: NewsState = {
  news: [],
  isLoading: false,
  error: null,
};

export const newsReducer = (
  state = initialState,
  action: NewsAction
): NewsState => {
  switch (action.type) {
    case NewsActionTypes.FETCH_NEWS:
      return { news: [], isLoading: true, error: null };
    case NewsActionTypes.FETCH_NEWS_SUCCESS:
      return { news: action.payload, isLoading: false, error: null };
    case NewsActionTypes.FETCH_NEWS_ERROR:
      return { news: [], isLoading: false, error: action.payload };
    default:
      return state;
  }
};
