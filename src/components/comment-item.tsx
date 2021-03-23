import React, { useState, useEffect } from 'react';
import { getComment } from '../requests/requests';
import { Comment } from '../types/news';
import CommentsList from './comments-list';

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

  const handleChildComments = (idArray: Array<number>) => {
    const child = <CommentsList commentsIdArray={idArray} />;
    setChildCommentsList(child);
  };

  if (!comment) return <div>Loading...</div>;
  else {
    return (
      <>
        <div dangerouslySetInnerHTML={{ __html: comment.text }}></div>
        <p>{comment.by}</p>
        <p>
          <b>{new Date(comment.time * 1000).toLocaleString('en-GB')}</b>
        </p>
        {comment.kids ? (
          <div style={{ color: 'blue' }}>
            {
              <button onClick={() => handleChildComments(comment.kids)}>
                Show child comments
              </button>
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
