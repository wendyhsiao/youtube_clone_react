import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MEDIA_QUERY_MD } from '../../utils/constants';
import CardBody from './CardBody';

const StyledLink = styled(Link)`
  width: 100%;
  ${MEDIA_QUERY_MD} {
    width: 45%;
    max-width: 360px;
    flex-shrink: 0;
  }
`;

const Card = styled.li`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  list-style: none;
  background-color: gray;

  ${MEDIA_QUERY_MD} {
    flex-direction: row;
  }
`;

const CardTop = styled.div`
  width: 100%;
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
  transform: translateY(-50%);
`;

function ResultsCard() {
  return (
    <Card>
      <StyledLink to={`/watch?v=XXX`}>
        <CardTop>
          <CardImg />
        </CardTop>
      </StyledLink>

      <CardBody />
    </Card>
  );
}

export default ResultsCard;
