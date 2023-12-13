import { Link } from 'react-router-dom';
import styled from 'styled-components';
import dayjs from 'dayjs';

import { MEDIA_QUERY_MD } from '../../utils/constants';
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

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  margin-right: 12px;
  border-radius: 100%;
  background-color: #f3f3f3;
  overflow: hidden;

  ${MEDIA_QUERY_MD} {
    display: none;
  }
`;

const AvatarMobile = styled.span`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  margin-right: 12px;
  border-radius: 100%;
  background-color: #f3f3f3;
  overflow: hidden;
  display: none;
  ${MEDIA_QUERY_MD} {
    display: inline-block;
  }
`;

const AvatarImg = styled.img`
  height: 100%;
  object-fit: cover;
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

const Channel = styled.div`
  display: none;
  ${MEDIA_QUERY_MD} {
    display: flex;
  }
`;

const ChannelTitleMobile = styled.span`
  ${MEDIA_QUERY_MD} {
    display: none;
  }
`;

const Description = styled.div`
  display: none;
  ${MEDIA_QUERY_MD} {
    display: block;
  }
`;

function CardBody({ video }) {
  return (
    <StyledCardBody>
      <Avatar>
        <AvatarImg src={video.snippet.thumbnails.default.url} />
      </Avatar>

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

      <Channel>
        <AvatarMobile>
          <AvatarImg src={video.snippet.thumbnails.default.url} />
        </AvatarMobile>
        <span>{video.snippet.channelTitle}</span>
      </Channel>

      <Description>{video.snippet.description}</Description>
    </StyledCardBody>
  );
}

export default CardBody;
