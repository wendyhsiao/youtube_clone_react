import Skeleton from 'react-loading-skeleton';
import styles from '../../styles/styles.module.css';

import styled from 'styled-components';
import {
  MEDIA_QUERY_LG,
  MEDIA_QUERY_MD,
  MEDIA_QUERY_SM,
} from '../../utils/constants';

const Cards = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.li`
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

const SkeletonImg = styled(Skeleton)`
  padding-bottom: 56.25%;
  border-radius: 0.5rem;
`;

const Body = styled.div`
  display: flex;
  gap: 12px;
  padding: 12px 0 24px;
`;

const Text = styled.div`
  flex-grow: 1;
  margin: auto;
`;

function Loader() {
  return (
    <Cards>
      {Array.from({ length: 12 }).map((_, i) => (
        <Card key={i}>
          <SkeletonImg />

          <Body>
            <Skeleton circle={true} width={40} height={40} />
            <Text className={styles.flexGrow}>
              <Skeleton width="90%" />
              <Skeleton width="60%" />
            </Text>
          </Body>
        </Card>
      ))}
    </Cards>
  );
}

export default Loader;
