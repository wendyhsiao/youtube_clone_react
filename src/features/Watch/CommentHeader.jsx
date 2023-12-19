import styled from 'styled-components';
import { MEDIA_QUERY_MD } from '../../utils/constants';
import { commaFormat } from '../../utils/helpers';
import CommentForm from './CommentForm';
import Avatar from '../../ui/Avatar';

const StyledHeader = styled.div`
  display: none;
  margin: 24px 0 32px;

  ${MEDIA_QUERY_MD} {
    display: block;
  }
`;

const CommentText = styled.strong`
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 700;
`;

const CommentBlock = styled.div`
  display: flex;
  margin-top: 24px;
`;

function CommentHeader({ video }) {
  return (
    <StyledHeader>
      <div>
        <CommentText>
          {commaFormat(video.statistics.commentCount)} 則留言
        </CommentText>
      </div>

      <CommentBlock>
        <Avatar />

        <CommentForm />
      </CommentBlock>
    </StyledHeader>
  );
}

export default CommentHeader;
