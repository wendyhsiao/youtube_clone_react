import styled from 'styled-components';
import { MEDIA_QUERY_MD } from '../../utils/constants';
import { commaFormat } from '../../utils/helpers';
import CommentForm from './CommentForm';
import Avatar from '../../ui/Avatar';

const StyledHeader = styled.div`
  display: none;

  ${MEDIA_QUERY_MD} {
    display: block;
  }
`;

const CommentBlock = styled.div`
  display: flex;
`;

function CommentHeader({ video }) {
  return (
    <StyledHeader>
      <div>
        <strong>{commaFormat(video.statistics.commentCount)} 則留言</strong>
      </div>

      <CommentBlock>
        <Avatar />

        <CommentForm />
      </CommentBlock>
    </StyledHeader>
  );
}

export default CommentHeader;
