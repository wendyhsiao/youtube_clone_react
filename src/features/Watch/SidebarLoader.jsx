import Skeleton from 'react-loading-skeleton';
import styles from '../../styles/styles.module.css';

import styled from 'styled-components';
import { MEDIA_QUERY_MD } from '../../utils/constants';

const Card = styled.li`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  list-style: none;

  ${MEDIA_QUERY_MD} {
    flex-direction: row;
  }
`;

const ImgWrap = styled.div`
  width: 100%;
  ${MEDIA_QUERY_MD} {
    width: 45%;
    max-width: 360px;
    flex-shrink: 0;
  }
`;

const SkeletonImg = styled(Skeleton)`
  padding-bottom: 56.25%;
  border-radius: 0.5rem;
`;

const Body = styled.div`
  display: none;
  flex-direction: column;
  flex-grow: 1;

  ${MEDIA_QUERY_MD} {
    display: flex;
  }
`;

const BodyMobile = styled.div`
  display: flex;
  gap: 12px;
  padding: 12px 0 24px;

  ${MEDIA_QUERY_MD} {
    display: none;
  }
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 0;
`;

const TextMobile = styled.div`
  flex-grow: 1;
  margin: auto;
`;

function SidebarLoader() {
  return (
    <ul>
      {Array.from({ length: 6 }).map((_, i) => (
        <Card key={i}>
          <ImgWrap>
            <SkeletonImg />
          </ImgWrap>

          <BodyMobile>
            <Skeleton circle={true} width={40} height={40} />
            <TextMobile className={styles.flexGrow}>
              <Skeleton width="90%" />
              <Skeleton width="60%" />
            </TextMobile>
          </BodyMobile>

          <Body>
            <Skeleton width="90%" count={2} />
            <Skeleton width="60%" />
          </Body>
        </Card>
      ))}
    </ul>
  );
}

export default SidebarLoader;
