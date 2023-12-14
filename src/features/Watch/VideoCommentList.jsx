import styled from 'styled-components';
import { useComments } from './useComments';

import Spinner from '../../ui/Spinner';
import CommentHeader from './CommentHeader';
import CommentItem from './CommentItem';

function VideoCommentList({ video }) {
  const { isLoading, comments, error } = useComments();
  console.log('comments', comments);

  if (!comments?.etag) return <p>no data</p>;
  const { items } = comments ?? [];

  const isMobile = window.innerWidth < 768;

  if (isMobile)
    return (
      <div>
        <CommentHeader video={video} comment={items[0]} />
      </div>
    );

  return (
    <div>
      <CommentHeader video={video} />

      <ul>
        {items.map((comment) => (
          <CommentItem comment={comment} key={comment.id} />
        ))}
      </ul>

      <Spinner />
    </div>
  );
}

export default VideoCommentList;
