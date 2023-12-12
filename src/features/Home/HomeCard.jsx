import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  MEDIA_QUERY_LG,
  MEDIA_QUERY_MD,
  MEDIA_QUERY_SM,
} from '../../constants/breakpoint';

import CardBody from './CardBody';

const Li = styled.li`
  width: 100%;
  padding: 0 0.5rem;
  flex-shrink: 0;
  box-sizing: border-box;
  list-style: none;

  ${MEDIA_QUERY_SM} {
    width: 50%;
  }

  ${MEDIA_QUERY_MD} {
    width: 33.333333%;
  }

  ${MEDIA_QUERY_LG} {
    width: 25%;
  }
`;

const CardTop = styled.div`
  padding-bottom: 56.25%;
  position: relative;
  border-radius: 0.5rem;
  background-color: #f3f3f3;
  overflow: hidden;
`;

const CardImg = styled.img`
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translate(-50%);
`;

function HomeCard() {
  return (
    <Li>
      <Link>
        <CardTop>
          <CardImg />
        </CardTop>

        <CardBody />
      </Link>
    </Li>
  );
}

export default HomeCard;
