import React from 'react';
// import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import { useParams, useHistory } from 'react-router-dom';
import { NewsItemType } from '../types/news';
import CommentsList from './comments-list';
import Grid from '@material-ui/core/Grid';
import RefreshIcon from '@material-ui/icons/Refresh';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

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
        <Button
          startIcon={<ArrowBackIcon />}
          variant="outlined"
          color="primary"
          onClick={() => history.goBack()}
        >
          Back
        </Button>
      </div>
    );

  return (
    <>
      <Grid container spacing={3} className="news__item__page">
        <Grid item xs={12}>
          <h3>{newsItem.title}</h3>
        </Grid>
        <Grid item xs={12}>
          <a href={newsItem.url}>{newsItem.url}</a>
        </Grid>
        <Grid item xs={2}>
          <AccountBoxIcon />
          Author: {newsItem.by}
        </Grid>
        <Grid item xs={10}>
          <CalendarTodayIcon />
          {new Date(newsItem.time * 1000).toLocaleString('en-GB')}
        </Grid>
      </Grid>
      {newsItem.kids ? (
        <div className="comments__list">
          <h4>Comments:</h4>
          <CommentsList commentsIdArray={newsItem.kids} />
        </div>
      ) : (
        <div className="comments__list">
          <h4>No comments</h4>
        </div>
      )}

      <div id="buttons">
        <div>
          <Button
            startIcon={<RefreshIcon />}
            variant="outlined"
            color="primary"
            href={`/news/${newsItemId}`}
          >
            Refresh
          </Button>
        </div>
        <div>
          <Button
            startIcon={<ArrowBackIcon />}
            variant="outlined"
            color="primary"
            onClick={() => history.goBack()}
          >
            Back
          </Button>
        </div>
      </div>
    </>
  );
};

export default NewsItem;
