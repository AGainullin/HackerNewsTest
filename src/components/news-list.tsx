import React, { useEffect } from 'react';
import { Link, Route, Redirect, Switch } from 'react-router-dom';
import { useTypedSelector } from '../hooks/use-typed-selector';
import { useDispatch } from 'react-redux';
import { getNewsAction } from '../store/action/news';
import NewsItem from './news-item';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import StarIcon from '@material-ui/icons/Star';
import LinkIcon from '@material-ui/icons/Link';

const NewsList = (): JSX.Element => {
  const { news, isLoading, error } = useTypedSelector(
    (state) => state.newsPage
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewsAction());
  }, []);

  if (isLoading) {
    return (
      <div className="loading__wrapper">
        <AutorenewIcon
          className="loading"
          color="primary"
          style={{ fontSize: 50 }}
        />
      </div>
    );
  }
  if (error) {
    return <h4>{error}</h4>;
  }

  return (
    <Switch>
      <Route exact path="/">
        <div className="news__list">
          <h1>News List: Best stories</h1>
          {news.map((newsItem) => (
            <Grid
              container
              spacing={3}
              className="news__item"
              key={newsItem.id}
            >
              <Grid item xs={9}>
                <Link className="link__news__title" to={`/news/${newsItem.id}`}>
                  {newsItem.title}
                </Link>
              </Grid>
              <Grid item xs={3} className="flex__right__align">
                <StarIcon />
                Score: {newsItem.score}
              </Grid>
              <Grid item xs={4}>
                {new Date(newsItem.time * 1000).toLocaleString('en-GB')}
              </Grid>
              <Grid item xs={4}>
                <AccountBoxIcon />
                Author: {newsItem.by}
              </Grid>
              <Grid item xs={4} className="flex__right__align">
                <Button
                  startIcon={<LinkIcon />}
                  variant="contained"
                  color="primary"
                  onClick={() => window.open(newsItem.url)}
                >
                  source
                </Button>
              </Grid>
            </Grid>
          ))}
        </div>
      </Route>
      <Route path={'/news/:newsItemId'}>
        <NewsItem newsArray={news} />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};

export default NewsList;
