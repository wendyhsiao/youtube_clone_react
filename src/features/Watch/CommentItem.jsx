import styled from 'styled-components';
import LikeIcon from '../../assets/icons/like.svg?react';
import DislikeIcon from '../../assets/icons/dislike.svg?react';
import CommentIcon from '../../assets/icons/comment.svg?react';

const StyledLi = styled.li`
  display: flex;
  margin-bottom: 16px;
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

const CommentItemText = styled.div`
  flex-grow: 1;
`;

const ItemHeader = styled.div`
  display: flex;
`;

const ItemBody = styled.p`
  margin: 0 4px;
  white-space: pre-wrap;
  overflow-wrap: break-word;
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: none;
`;

function CommentItem() {
  return (
    <StyledLi>
      <Avatar>
        <AvatarImg />
      </Avatar>

      <CommentItemText>
        <ItemHeader>
          <p>user</p>
          <span> X 天前</span>
        </ItemHeader>

        <ItemBody>text text text text text</ItemBody>

        <ButtonGroup>
          <Button>
            <LikeIcon />
            <span>X</span>
          </Button>
          <Button>
            <DislikeIcon />
            <span>X</span>
          </Button>
          <Button>
            <CommentIcon />
            <span>X</span>
          </Button>
        </ButtonGroup>
      </CommentItemText>
    </StyledLi>
  );
}

export default CommentItem;
