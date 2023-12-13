import styled from 'styled-components';
import { useRelated } from './useRelated';

import { MEDIA_QUERY_MD } from '../../utils/constants';
import VideoCard from './VideoCard';

const Sidebar = styled.aside`
  padding: 0 12px;

  ${MEDIA_QUERY_MD} {
    width: 40%;
    max-width: 400px;
  }
`;

const SidebarTitle = styled.h3`
  padding: 12px 0;
`;

function WatchSidebar() {
  const { isLoading, videos, error } = useRelated();

  if (!videos?.etag) return <p>no data</p>;
  const { items } = videos ?? [];

  return (
    <Sidebar>
      <SidebarTitle>即將播放</SidebarTitle>
      <ul>
        {items.map((video) => (
          <VideoCard video={video} key={video.etag} />
        ))}
      </ul>
    </Sidebar>
  );
}

export default WatchSidebar;
