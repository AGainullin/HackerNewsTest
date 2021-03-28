import React, { useState, useEffect, SyntheticEvent } from 'react';
import { getComment } from '../requests/requests';
import { Comment } from '../types/news';
import CommentsList from './comments-list';
import Button from '@material-ui/core/Button';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import CommentIcon from '@material-ui/icons/Comment';
import Grid from '@material-ui/core/Grid';

const CommentItem = ({ id }: { id: number }): JSX.Element => {
  const [comment, setComment] = useState<Comment>();
  const [childCommentsList, setChildCommentsList] = useState<JSX.Element>();

  useEffect(() => {
    const fetchComment = async () => {
      const comment = await getComment(id);
      setComment(comment);
    };
    fetchComment();
  }, [id]);

  const handleChildComments = (e: SyntheticEvent, idArray: Array<number>) => {
    e.currentTarget.classList.add('hide');
    const child = <CommentsList commentsIdArray={idArray} />;
    setChildCommentsList(child);
  };

  if (!comment)
    return (
      <div className="loading__wrapper">
        <AutorenewIcon
          className="loading"
          color="primary"
          style={{ fontSize: 20 }}
        />
      </div>
    );
  else {
    return (
      <>
        <Grid container spacing={3} className="comment__item">
          <Grid item xs={12}>
            <div dangerouslySetInnerHTML={{ __html: comment.text }}></div>
          </Grid>
          <Grid item xs={10} className="text__right__align bold">
            {comment.by}
          </Grid>
          <Grid item xs={2} className="text__right__align bold">
            {new Date(comment.time * 1000).toLocaleString('en-GB')}
          </Grid>
        </Grid>
        {comment.kids ? (
          <div style={{ margin: '20px 0' }}>
            {
              <Grid item xs={12} className="text__right__align">
                <Button
                  startIcon={<CommentIcon />}
                  variant="contained"
                  color="default"
                  size="small"
                  onClick={(e) => handleChildComments(e, comment.kids)}
                >
                  Show child comments
                </Button>
              </Grid>
            }
            {childCommentsList}
          </div>
        ) : (
          <></>
        )}
      </>
    );
  }
};

export default CommentItem;
