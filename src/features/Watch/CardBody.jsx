import { Link } from 'react-router-dom';
import styled from 'styled-components';
import dayjs from 'dayjs';

import { MEDIA_QUERY_MD } from '../../utils/constants';
import Avatar from '../../ui/Avatar';
import MoreIcon from '../../assets/icons/more.svg?react';

const StyledCardBody = styled.div`
  display: flex;
  flex-grow: 1;
  padding: 12px 0 24px;

  ${MEDIA_QUERY_MD} {
    flex-direction: column;
    padding: 0;
  }
`;

const AvatarPC = styled(Avatar)`
  ${MEDIA_QUERY_MD} {
    display: none;
  }
`;

const TextGroup = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  ${MEDIA_QUERY_MD} {
    flex-grow: 0;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 1 auto;
`;

const StyledTitle = styled.h3`
  font-weight: inherit;
  text-align: left;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

const Button = styled.button`
  border: none;
  background: none;
`;

const ChannelTitleMobile = styled.span``;

function CardBody({ video }) {
  return (
    <StyledCardBody>
      <AvatarPC url={video.snippet.thumbnails.default.url} />

      <TextGroup>
        <StyledLink>
          <StyledTitle>{video.snippet.title}</StyledTitle>
          <ChannelTitleMobile>{video.snippet.channelTitle}</ChannelTitleMobile>
          <span>
            {/* 觀看次數：{countFormat(video.statistics.viewCount)}次 • */}
            {dayjs(video.snippet.publishedAt).fromNow()}
          </span>
        </StyledLink>

        <Button>
          <MoreIcon />
        </Button>
      </TextGroup>
    </StyledCardBody>
  );
}

export default CardBody;
