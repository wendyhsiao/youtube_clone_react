import { useState } from 'react';
import styled, { css } from 'styled-components';
import dayjs from 'dayjs';

import { MEDIA_QUERY_MD } from '../../utils/constants';
import { countFormat, descriptionFormat } from '../../utils/helpers';

const Wrapper = styled.div`
  display: none;
  padding: 12px;
  border-radius: 12px;
  background-color: #f2f2f2;
  ${(props) =>
    !props.$isOpen &&
    css`
      height: 104px;
    `}

  ${MEDIA_QUERY_MD} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const Description = styled.div`
  white-space: pre-wrap;
  overflow-wrap: break-word;

  ${(props) =>
    !props.$isOpen &&
    css`
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    `}

  a {
    color: #065fd4;
  }
`;

const Button = styled.button`
  border: 0;
  cursor: pointer;
`;

function VideoDescription({ video, titleGroupRef }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen((open) => !open);
    if (isOpen)
      titleGroupRef.current.scrollIntoView({
        behavior: 'smooth',
      });
  }

  return (
    <Wrapper $isOpen={isOpen}>
      <span>
        觀看次數：{countFormat(video.statistics.viewCount)}次 ·
        {dayjs(video.snippet.publishedAt).fromNow()}
      </span>
      <Description
        $isOpen={isOpen}
        dangerouslySetInnerHTML={descriptionFormat(video.snippet.description)}
      ></Description>
      <Button onClick={handleClick}>
        {isOpen ? '只顯示部分資訊' : '顯示完整資訊'}
      </Button>
    </Wrapper>
  );
}

export default VideoDescription;
