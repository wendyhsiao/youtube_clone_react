import styled from 'styled-components';
import { MEDIA_QUERY_MD } from '../../utils/constants';
import CommentForm from './CommentForm';

const StyledHeaderMobile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 12px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
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

function CommentHeader() {
  return (
    <>
      <StyledHeaderMobile>
        <strong>留言 </strong>• XX 則
      </StyledHeaderMobile>

      <StyledHeader>
        <div>
          <strong>XX 則留言</strong>
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
