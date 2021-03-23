import React from 'react';
import CommentItem from './comment-item';

const CommentsList = ({
  commentsIdArray,
}: {
  commentsIdArray: Array<number> | undefined;
}): JSX.Element => {
  return (
    <ul>
      {commentsIdArray
        ? commentsIdArray.map((id) => (
            <li key={id}>
              <CommentItem id={id} />
            </li>
          ))
        : 'no comments'}
    </ul>
  );
};

export default CommentsList;
