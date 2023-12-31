import { useRef } from 'react';
import styled from 'styled-components';
import { MEDIA_QUERY_MD } from '../../utils/constants';

import VideoIframe from './VideoIframe';
import VideoDescription from './VideoDescription';
import VideoTitleGroup from './VideoTitleGroup';
import VideoChannel from './VideoChannel';

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

function VideoBlock({ video }) {
  const titleGroupRef = useRef(null);
  return (
    <>
      <VideoWarp>
        <VideoIframe id={video.id} />
      </VideoWarp>

      <VideoTitleGroup video={video} titleGroupRef={titleGroupRef} />
      <VideoChannel video={video} />
      <VideoDescription video={video} titleGroupRef={titleGroupRef} />
    </>
  );
}

export default VideoBlock;
