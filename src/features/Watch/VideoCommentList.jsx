import { useComments } from './useComments';

function VideoCommentList() {
  const { isLoading, comments, error } = useComments();
  console.log('comments', comments);

  return <div>VideoCommentList</div>;
}

export default VideoCommentList;
