import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';
import styles from '../../styles/styles.module.css';
import { MEDIA_QUERY_MD } from '../../utils/constants';

const VideoWarp = styled.div`
  position: fixed;
  top: 48px;
  right: 0;
  left: 0;
  z-index: 2;

  ${MEDIA_QUERY_MD} {
    position: static;
  }
`;

const SkeletonImg = styled(Skeleton)`
  padding-bottom: 56.25%;
  border-radius: 0.5rem;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 24px 12px 0;

  ${MEDIA_QUERY_MD} {
    padding-top: 12px;
  }
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 0;
`;

function VideoLoader() {
  return (
    <>
      <VideoWarp>
        <SkeletonImg />
      </VideoWarp>

      <Body>
        <Skeleton width="90%" height="26px" />
        <Text>
          <Skeleton circle={true} width={40} height={40} />
          <Skeleton width="40%" containerClassName={styles.flexGrow} />
        </Text>
        <Skeleton width="90%" />
        <Skeleton width="60%" />
      </Body>
    </>
  );
}

export default VideoLoader;
