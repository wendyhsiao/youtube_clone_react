import { useComments } from './useComments';

import CommentHeader from './CommentHeader';
import CommentHeaderMobile from './CommentHeaderMobile';
import CommentList from './CommentList';
import BottomSheets from '../../ui/BottomSheets';

function VideoCommentList({ video }) {
  const { isLoading, comments, error, fetchNextPage, hasNextPage } =
    useComments();

  if (!comments?.pages.length) return <p>no data</p>;

  const isMobile = window.innerWidth < 768;

  if (isMobile)
    return (
      <BottomSheets>
        <BottomSheets.Open opens="comments">
          <CommentHeaderMobile video={video} comments={comments} />
        </BottomSheets.Open>

        <BottomSheets.Window name="comments" title="留言">
          <CommentList
            comments={comments}
            hasNextPage={hasNextPage}
            fetchNextPage={fetchNextPage}
          />
        </BottomSheets.Window>
      </BottomSheets>
    );

  return (
    <div>
      <CommentHeader video={video} />

      <CommentList
        comments={comments}
        hasNextPage={hasNextPage}
        fetchNextPage={fetchNextPage}
      />
    </div>
  );
}

export default VideoCommentList;
