import { Fragment } from 'react';
import CommentItem from './CommentItem';
import Spinner from '../../ui/Spinner';

function CommentList({ comments, hasNextPage, fetchNextPage }) {
  return (
    <>
      <ul>
        {comments.pages.map((group, i) => (
          <Fragment key={i}>
            {group.items.map((comment) => (
              <CommentItem comment={comment} key={comment.id} />
            ))}
          </Fragment>
        ))}
      </ul>

      {hasNextPage && <Spinner func={fetchNextPage} />}
    </>
  );
}

export default CommentList;
