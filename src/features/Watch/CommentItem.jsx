import { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import dayjs from 'dayjs';

import { MEDIA_QUERY_MD } from '../../utils/constants';
import LikeIcon from '../../assets/icons/like.svg?react';
import DislikeIcon from '../../assets/icons/dislike.svg?react';
import CommentIcon from '../../assets/icons/comment.svg?react';
import Avatar from '../../ui/Avatar';

const StyledLi = styled.li`
  display: flex;
  margin-bottom: 16px;
`;

const CommentItemText = styled.div`
  flex-grow: 1;
`;

const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2px;

  ${MEDIA_QUERY_MD} {
    justify-content: flex-start;
  }
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
  margin: 4px;
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
      <Avatar url={authorProfileImageUrl} />

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
