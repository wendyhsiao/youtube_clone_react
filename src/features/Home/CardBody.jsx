import { Link } from 'react-router-dom';
import styled from 'styled-components';
import dayjs from 'dayjs';

import { countFormat } from '../../utils/helpers';
import MoreIcon from '../../assets/icons/more.svg?react';
import Avatar from '../../ui/Avatar';

const StyledCardBody = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 12px 0 24px;
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 1 auto;
  line-height: 1.25rem;
`;

const StyledTitle = styled.h3`
  font-size: 1rem;
  line-height: 1.375rem;
  font-weight: 500;
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

function CardBody({ video }) {
  const { thumbnails, title, channelTitle, publishedAt } = video.snippet;

  return (
    <StyledCardBody>
      <Avatar url={thumbnails.high.url} size="40px" />

      <StyledLink to={`/watch?v=${video.id}`}>
        <StyledTitle>{title}</StyledTitle>
        <span>{channelTitle}</span>
        <span>
          觀看次數：{countFormat(video.statistics.viewCount)}次 •{' '}
          {dayjs(publishedAt).fromNow()}
        </span>
      </StyledLink>

      <Button>
        <MoreIcon />
      </Button>
    </StyledCardBody>
  );
}

export default CardBody;
