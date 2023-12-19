import { useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import dayjs from 'dayjs';

import { MEDIA_QUERY_MD } from '../../utils/constants';
import {
  commaFormat,
  countFormat,
  descriptionFormat,
  fetchYear,
} from '../../utils/helpers';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 12px;
  border-radius: 12px;
  background-color: #f2f2f2;
  ${(props) =>
    !props.isOpen &&
    css`
      height: 104px;
    `}

  ${MEDIA_QUERY_MD} {
    display: none;
  }
`;

const Description = styled.div`
  white-space: pre-wrap;
  overflow-wrap: break-word;

  ${(props) =>
    !props.isOpen &&
    css`
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 8;
    `}

  a {
    color: #065fd4;
  }
`;

const Button = styled.button`
  border: 0;
  cursor: pointer;
`;

const Title = styled.h2``;

const Channel = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
`;

const Avatar = styled.div`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  margin-right: 12px;
  border-radius: 100%;
  background-color: #f3f3f3;
  overflow: hidden;

  ${MEDIA_QUERY_MD} {
    width: 40px;
    height: 40px;
  }
`;

const AvatarImg = styled.img`
  height: 100%;
  object-fit: cover;
`;

const Information = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 8px;
`;
const InformationItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InformationValue = styled.div`
  font-size: 1.125rem;
  line-height: 26px;
  font-weight: 700;
`;

function VideoDescription({ video }) {
  const [isOpen, setIsOpen] = useState(false);
  const goTopRef = useRef();

  function handleClick() {
    setIsOpen((open) => !open);

    if (isOpen)
      goTopRef.current.scrollIntoView({
        behavior: 'smooth',
      });
  }

  return (
    <div ref={goTopRef}>
      <Title>{video.snippet.title}</Title>
      <Channel>
        <Avatar>
          <AvatarImg src={video.snippet.thumbnails.default.url} />
        </Avatar>
        <span>{video.snippet.channelTitle}</span>
      </Channel>
      <Information>
        <InformationItem>
          <InformationValue>
            {countFormat(video.statistics.likeCount)}
          </InformationValue>
          <span>喜歡次數</span>
        </InformationItem>
        <InformationItem>
          <InformationValue>
            {commaFormat(video.statistics.viewCount)}
          </InformationValue>
          <span>觀看次數</span>
        </InformationItem>
        <InformationItem>
          <InformationValue>
            {fetchYear(video.snippet.publishedAt, 'day')}
          </InformationValue>
          <span>{fetchYear(video.snippet.publishedAt, 'year')}</span>
        </InformationItem>
      </Information>

      <Wrapper isOpen={isOpen}>
        {/* <span>
        觀看次數：{countFormat(video.statistics.viewCount)}次 ·
        {dayjs(video.snippet.publishedAt).fromNow()}
      </span> */}

        <Description
          isOpen={isOpen}
          dangerouslySetInnerHTML={descriptionFormat(video.snippet.description)}
        ></Description>
        <Button onClick={handleClick}>
          {isOpen ? '只顯示部分資訊' : '顯示完整資訊'}
        </Button>
      </Wrapper>
    </div>
  );
}

export default VideoDescription;
