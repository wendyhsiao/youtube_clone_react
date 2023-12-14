import styled from 'styled-components';
import { useComments } from './useComments';

import Spinner from '../../ui/Spinner';
import CommentHeader from './CommentHeader';
import CommentItem from './CommentItem';

function VideoCommentList() {
  const { isLoading, comments, error } = useComments();
  console.log('comments', comments);

  if (!comments?.etag) return <p>no data</p>;
  const { items } = comments ?? [];

  return (
    <div>
      <CommentHeader />

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
