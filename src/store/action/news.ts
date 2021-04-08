import { Dispatch } from 'redux';
import { getNewsArray } from '../../requests/requests';
import { NewsAction, NewsActionTypes } from '../../types/news';

export const getNewsAction = () => {
  return async (dispatch: Dispatch<NewsAction>): Promise<void> => {
    try {
      dispatch({ type: NewsActionTypes.LOADING, payload: true });
      const newsArray = await getNewsArray();
      dispatch({
        type: NewsActionTypes.FETCH_NEWS,
        payload: newsArray,
      });
    } catch (e) {
      dispatch({
        type: NewsActionTypes.ERROR,
        payload: 'Error get news from server',
      });
    } finally {
      dispatch({ type: NewsActionTypes.LOADING, payload: false });
    }
  };
};
