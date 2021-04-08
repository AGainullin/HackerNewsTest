export interface NewsState {
  news: NewsItemType[];
  uiState: { isLoading: boolean; error: string | null };
}

export enum NewsActionTypes {
  LOADING = 'LOADING',
  FETCH_NEWS = 'FETCH_NEWS',
  ERROR = 'ERROR',
}

export interface NewsAction {
  type: NewsActionTypes;
  payload: boolean | string | NewsItemType[];
}

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
