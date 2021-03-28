import React from 'react';
import CommentItem from './comment-item';

const CommentsList = ({
  commentsIdArray,
}: {
  commentsIdArray: Array<number> | undefined;
}): JSX.Element => {
  return (
    <ul style={{ margin: '30px 0 30px 50px' }}>
      {commentsIdArray ? (
        commentsIdArray.map((id) => (
          <li key={id}>
            <CommentItem id={id} />
          </li>
        ))
      ) : (
        <></>
      )}
    </ul>
  );
};

export default CommentsList;
