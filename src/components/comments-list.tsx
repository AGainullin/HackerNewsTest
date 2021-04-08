import React from 'react';
import CommentItem from './comment-item';

type CommentsIdArrayProps = {
  commentsIdArray: number[];
};

const CommentsList: React.FC<CommentsIdArrayProps> = ({
  commentsIdArray = [],
}) => {
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
