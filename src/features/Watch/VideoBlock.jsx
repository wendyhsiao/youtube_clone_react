import styled from 'styled-components';
import { MEDIA_QUERY_MD } from '../../utils/constants';
import VideoIframe from './VideoIframe';

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
    <VideoWarp>
      <VideoIframe />
    </VideoWarp>
  );
}

export default VideoBlock;
