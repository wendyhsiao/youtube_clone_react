import { Fragment } from 'react';
import { useComments } from './useComments';

import Spinner from '../../ui/Spinner';
import CommentHeader from './CommentHeader';
import CommentItem from './CommentItem';

function VideoCommentList({ video }) {
  const { isLoading, comments, error, fetchNextPage, hasNextPage } =
    useComments();

  if (!comments?.pages.length) return <p>no data</p>;

  console.log('comments', comments);
  const isMobile = window.innerWidth < 768;

  if (isMobile)
    return (
      <div>
        <CommentHeader video={video} comment={comments?.pages[0].items[0]} />
      </div>
    );

  return (
    <div>
      <CommentHeader video={video} />

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
    </div>
  );
}

export default VideoCommentList;
