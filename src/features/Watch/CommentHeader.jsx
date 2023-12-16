import styled from 'styled-components';
import { MEDIA_QUERY_MD } from '../../utils/constants';
import { commaFormat } from '../../utils/helpers';
import CommentForm from './CommentForm';

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

const StyledHeader = styled.div`
  display: none;

  ${MEDIA_QUERY_MD} {
    display: block;
  }
`;

const CommentBlock = styled.div`
  display: flex;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  margin-right: 12px;
  border-radius: 100%;
  background-color: #f3f3f3;
  overflow: hidden;
`;

const AvatarImg = styled.img`
  height: 100%;
  object-fit: cover;
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

function CommentHeader({ video, comment }) {
  return (
    <>
      <StyledHeaderMobile>
        <strong>留言 {commaFormat(video.statistics.commentCount)}</strong>
        <CommentText>
          {comment?.snippet.topLevelComment.snippet.textOriginal}
        </CommentText>
      </StyledHeaderMobile>

      <StyledHeader>
        <div>
          <strong>{commaFormat(video.statistics.commentCount)} 則留言</strong>
        </div>

        <CommentBlock>
          <Avatar>
            <AvatarImg />
          </Avatar>

          <CommentForm />
        </CommentBlock>
      </StyledHeader>
    </>
  );
}

export default CommentHeader;
