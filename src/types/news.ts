export interface NewsState {
  news: any[];
  isLoading: boolean;
  error: string | null;
}

export enum NewsActionTypes {
  FETCH_NEWS = 'FETCH_NEWS',
  FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS',
  FETCH_NEWS_ERROR = 'FETCH_NEWS_ERROR',
}

interface FetchNewsAction {
  type: NewsActionTypes.FETCH_NEWS;
}

interface FetchNewsSuccessAction {
  type: NewsActionTypes.FETCH_NEWS_SUCCESS;
  payload: any[];
}

interface FetchNewsErrorAction {
  type: NewsActionTypes.FETCH_NEWS_ERROR;
  payload: string;
}

export type NewsAction =
  | FetchNewsAction
  | FetchNewsSuccessAction
  | FetchNewsErrorAction;

export interface NewsItemType {
  by: string;
  descendants: number;
  id: number;
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
  kids?: Array<number>;
}

export type Comment = {
  by: string;
  id: number;
  kids: Array<number>;
  parent?: number;
  text: string;
  time: number;
  type: number;
};
