import { Dispatch } from 'redux';
import { getNewsArray } from '../../requests/requests';
import { NewsAction, NewsActionTypes } from '../../types/news';

export const getNewsAction = () => {
  return async (dispatch: Dispatch<NewsAction>): Promise<any> => {
    try {
      dispatch({ type: NewsActionTypes.FETCH_NEWS });
      const newsArray = await getNewsArray();
      dispatch({
        type: NewsActionTypes.FETCH_NEWS_SUCCESS,
        payload: newsArray,
      });
    } catch (e) {
      console.log(e);
      dispatch({
        type: NewsActionTypes.FETCH_NEWS_ERROR,
        payload: 'Error get news from server',
      });
    }
  };
};
