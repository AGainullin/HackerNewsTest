import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { NewsItemType } from '../types/news';
import CommentsList from './comments-list';

const NewsItem = ({
  newsArray,
}: {
  newsArray: NewsItemType[];
}): JSX.Element => {
  const { newsItemId } = useParams<{ newsItemId: string }>();
  const history = useHistory();
  const newsItem = newsArray.find((item) => item.id === Number(newsItemId));

  if (!newsItem)
    return (
      <div className="news__item">
        <h3>Can not find news</h3>
        <button onClick={() => history.goBack()}>Back</button>
      </div>
    );

  return (
    <div className="news__item">
      <h3>{newsItem.title}</h3>
      <a href={newsItem.url}>{newsItem.url}</a>
      <p>Author: {newsItem.by}</p>
      <p>{new Date(newsItem.time * 1000).toLocaleString('en-GB')}</p>
      <button onClick={() => history.goBack()}>Back</button>
      <CommentsList commentsIdArray={newsItem.kids} />
    </div>
  );
};

export default NewsItem;
