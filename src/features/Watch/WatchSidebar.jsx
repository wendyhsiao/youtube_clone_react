import { Fragment } from 'react';
import styled from 'styled-components';
import { useRelated } from './useRelated';

import { MEDIA_QUERY_MD } from '../../utils/constants';
import VideoCard from './VideoCard';
import Spinner from '../../ui/Spinner';
import SidebarLoader from './SidebarLoader';

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
  const { isLoading, videos, error, fetchNextPage, hasNextPage } = useRelated();

  if (isLoading)
    return (
      <Sidebar>
        <SidebarTitle>即將播放</SidebarTitle>
        <SidebarLoader />
      </Sidebar>
    );
  if (!videos?.pages.length) return <p>no data</p>;

  return (
    <Sidebar>
      <SidebarTitle>即將播放</SidebarTitle>
      <ul>
        {videos.pages.map((group, i) => (
          <Fragment key={i}>
            {group.items.map((video) => (
              <VideoCard video={video} key={video.etag} />
            ))}
          </Fragment>
        ))}
      </ul>

      {hasNextPage && <Spinner func={fetchNextPage} />}
    </Sidebar>
  );
}

export default WatchSidebar;
