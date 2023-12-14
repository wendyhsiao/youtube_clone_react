import styled from 'styled-components';
import LikeIcon from '../../assets/icons/like.svg?react';
import DislikeIcon from '../../assets/icons/dislike.svg?react';
import CommentIcon from '../../assets/icons/comment.svg?react';
import dayjs from 'dayjs';

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

function CommentItem({ comment }) {
  const {
    authorProfileImageUrl,
    authorDisplayName,
    publishedAt,
    textDisplay,
    likeCount,
  } = comment.snippet.topLevelComment.snippet;

  return (
    <StyledLi>
      <Avatar>
        <AvatarImg src={authorProfileImageUrl} />
      </Avatar>

      <CommentItemText>
        <ItemHeader>
          <p>{authorDisplayName} </p>
          <span>&ensp;{dayjs(publishedAt).fromNow()}</span>
        </ItemHeader>

        <ItemBody dangerouslySetInnerHTML={{ __html: textDisplay }}></ItemBody>

        <ButtonGroup>
          <Button>
            <LikeIcon />
            {likeCount > 0 && <span>{likeCount}</span>}
          </Button>
          <Button>
            <DislikeIcon />
          </Button>
          <Button>
            <CommentIcon />
            {comment.snippet.totalReplyCount > 0 && (
              <span>{comment.snippet.totalReplyCount}</span>
            )}
          </Button>
        </ButtonGroup>
      </CommentItemText>
    </StyledLi>
  );
}

export default CommentItem;
