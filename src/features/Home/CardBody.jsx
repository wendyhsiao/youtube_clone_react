import { Link } from 'react-router-dom';
import styled from 'styled-components';

import MoreIcon from '../../assets/icons/more.svg?react';

const StyledCardBody = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 12px 0 24px;
`;

const Avatar = styled.div`
  width: 40px;
  aspect-ratio: 1;
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

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 1 auto;
`;

const StyledTitle = styled.h3`
  /* font-size: 1.4rem; */
  /* line-height: 1.25rem; */
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

function CardBody() {
  return (
    <StyledCardBody>
      <Avatar>
        <AvatarImg />
      </Avatar>

      <StyledLink to={`/watch?v=XXX`}>
        <StyledTitle>Title</StyledTitle>
        <div>Channel Title</div>
        <span>觀看次數：XX次 • XX天前</span>
      </StyledLink>

      <Button>
        <MoreIcon />
      </Button>
    </StyledCardBody>
  );
}

export default CardBody;
