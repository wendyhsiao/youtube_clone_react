import { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import dayjs from 'dayjs';

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

  ${(props) =>
    props.$openState === 'close' &&
    css`
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4;
    `}
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
  cursor: pointer;
`;

function CommentItem({ comment }) {
  const {
    authorProfileImageUrl,
    authorDisplayName,
    publishedAt,
    textDisplay,
    likeCount,
  } = comment.snippet.topLevelComment.snippet;

  // null , open, close
  const [openState, setOpenState] = useState(null);
  const textRef = useRef();

  const isElementCollision = () => {
    const itemDom = textRef.current.offsetHeight;
    return itemDom <= 4 * 20;
  };

  useEffect(() => {
    const isHidden = isElementCollision();
    setOpenState(isHidden ? null : 'close');
  }, []);

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

        <div>
          <ItemBody
            ref={textRef}
            dangerouslySetInnerHTML={{ __html: textDisplay }}
            $openState={openState}
          ></ItemBody>

          {openState === 'close' && (
            <Button onClick={() => setOpenState('open')}>顯示完整內容</Button>
          )}
          {openState === 'open' && (
            <Button onClick={() => setOpenState('close')}>
              只顯示部分內容
            </Button>
          )}
        </div>

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
