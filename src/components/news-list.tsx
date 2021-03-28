import React, { useEffect } from 'react';
import { Link, Route, Redirect, Switch } from 'react-router-dom';
import { useTypedSelector } from '../hooks/use-typed-selector';
import { useDispatch } from 'react-redux';
import { getNewsAction } from '../store/action/news';
import NewsItem from './news-item';

const NewsList = (): JSX.Element => {
  const { news, isLoading, error } = useTypedSelector(
    (state) => state.newsPage
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewsAction());
  }, []);

  if (isLoading) {
    return <h4>Loading...</h4>;
  }
  if (error) {
    return <h4>{error}</h4>;
  }

  return (
    <>
      <div className="news__item">
        <Switch>
          <Route exact path="/">
            <div className="news__list">
              <h1>News List: Best stories</h1>
              {news.map((newsItem) => (
                <div key={newsItem.id} className="news__item">
                  <div>
                    <Link to={`/news/${newsItem.id}`}>{newsItem.title}</Link>
                  </div>
                  <div>Author: {newsItem.by}</div>
                  <div>
                    {new Date(newsItem.time * 1000).toLocaleString('en-GB')}
                  </div>
                  <div>
                    <a href={newsItem.url}>Go to original source of news</a>
                  </div>
                  <div>Score: {newsItem.score}</div>
                </div>
              ))}
            </div>
          </Route>
          <Route path={'/news/:newsItemId'}>
            <NewsItem newsArray={news} />
          </Route>
          <Redirect to="/" />
        </Switch>
      </div>
    </>
  );
};

export default NewsList;
