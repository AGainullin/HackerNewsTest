import axios from 'axios';
import {
  BASE_URL,
  URL_NEWS_PARAMETER,
  URL_ITEM_PARAMETER,
  NUMBER_NEWS,
} from './variables';
import { NewsItemType, Comment } from '../types/news';

export const getNewsIdArray = async (): Promise<number[]> => {
  const { data } = await axios.get(`${BASE_URL}/${URL_NEWS_PARAMETER}`, {
    params: { print: 'pretty' },
  });
  return data.slice(0, NUMBER_NEWS);
};

export const getNewsArray = async (): Promise<NewsItemType[]> => {
  const newsIdArray = await getNewsIdArray();
  const newsArray: NewsItemType[] = [];
  for (let i = 0; i < newsIdArray.length; i++) {
    const { data } = await axios.get(
      `${BASE_URL}/${URL_ITEM_PARAMETER}/${newsIdArray[i]}.json`,
      {
        params: { print: 'pretty' },
      }
    );
    newsArray.push(data);
  }
  return newsArray;
};

export const getComment = async (id: number): Promise<Comment> => {
  const { data } = await axios.get(
    `${BASE_URL}/${URL_ITEM_PARAMETER}/${id}.json`,
    {
      params: { print: 'pretty' },
    }
  );
  return data;
};
