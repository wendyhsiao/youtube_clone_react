import styled from 'styled-components';
import { useWatch } from '../features/Watch/useWatch';
import { MEDIA_QUERY_MD } from '../utils/constants';
import VideoBlock from '../features/Watch/VideoBlock';
import VideoCommentBlock from '../features/Watch/VideoCommentBlock';
import WatchSidebar from '../features/Watch/WatchSidebar';

const WatchLayout = styled.div`
  margin: 0 auto;
  background-color: white;

  ${MEDIA_QUERY_MD} {
    display: flex;
    max-width: 90%;
  }
`;

const WatchMain = styled.main`
  margin-top: 56.25%;
  flex: 1 1 0%;
  text-align: left;

  ${MEDIA_QUERY_MD} {
    margin-top: 0;
  }
`;


function Watch() {
  const { isLoading, video, error } = useWatch();

  const { items } = video ?? [];
  if (!video?.etag) return <p>no data</p>;

  return (
    <WatchLayout>
      <WatchMain>
        <VideoBlock video={items[0]} />
        <VideoCommentBlock video={items[0]} />
      </WatchMain>

      <WatchSidebar />
    </WatchLayout>
  );
}

export default Watch;
