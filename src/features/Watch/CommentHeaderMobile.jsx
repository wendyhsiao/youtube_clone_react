import styled from 'styled-components';
import { MEDIA_QUERY_MD } from '../../utils/constants';
import { commaFormat } from '../../utils/helpers';

const StyledHeaderMobile = styled.div`
  margin: 16px;
  padding: 12px;
  border-radius: 12px;
  background-color: #f2f2f2;
  cursor: pointer;

  ${MEDIA_QUERY_MD} {
    display: none;
  }
`;

const CommentText = styled.p`
  margin: 0 4px;
  white-space: pre-wrap;
  overflow-wrap: break-word;

  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

function CommentHeader({ video, comments, onClick }) {
  const comment = comments?.pages[0].items[0];

  return (
    <StyledHeaderMobile onClick={onClick}>
      <strong>留言 {commaFormat(video.statistics.commentCount)}</strong>
      <CommentText>
        {comment?.snippet.topLevelComment.snippet.textOriginal}
      </CommentText>
    </StyledHeaderMobile>
  );
}

export default CommentHeader;
