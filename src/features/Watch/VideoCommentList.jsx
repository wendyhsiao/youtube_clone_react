import styled from 'styled-components';
import { useComments } from './useComments';

import Spinner from '../../ui/Spinner';
import CommentHeader from './CommentHeader';
import CommentItem from './CommentItem';

function VideoCommentList() {
  const { isLoading, comments, error } = useComments();
  console.log('comments', comments);

  return (
    <div>
      <CommentHeader />

      <ul>
        <CommentItem />
      </ul>

      <Spinner />
    </div>
  );
}

export default VideoCommentList;
