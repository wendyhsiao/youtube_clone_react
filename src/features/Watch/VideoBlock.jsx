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

function VideoBlock() {
  return (
    <>
      <VideoWarp>
        <VideoIframe />
      </VideoWarp>

      <VideoTitleGroup />
      <VideoChannel />
      <VideoDescription />
    </>
  );
}

export default VideoBlock;
