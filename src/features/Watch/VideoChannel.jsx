import styled from 'styled-components';
import { MEDIA_QUERY_LG, MEDIA_QUERY_MD } from '../../utils/constants';
import ChannelButtonGroup from './ChannelButtonGroup';
import Avatar from '../../ui/Avatar';

const StyledVideoChannel = styled.div`
  padding: 0 12px;
  border-bottom: 1px solid rgb(0 0 0 / 0.1);

  ${MEDIA_QUERY_MD} {
    border: 0;
  }

  ${MEDIA_QUERY_LG} {
    display: flex;
    justify-content: space-between;
  }
`;

const ChannelIntro = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 9px;
`;

const Intro = styled.div`
  display: flex;
`;

const Button = styled.button`
  margin-left: 0.5rem;
  padding: 0 16px;
  height: 2.25rem;
  border-radius: 18px;
  color: white;
  background-color: black;
`;

function VideoChannel({ video }) {
  return (
    <StyledVideoChannel>
      <ChannelIntro>
        <Intro>
          <Avatar url={video.snippet.thumbnails?.default?.url} />

          <div>
            <h3>{video.snippet.channelTitle}</h3>
            <span>XX萬 位訂閱者</span>
          </div>
        </Intro>

        <Button>訂閱</Button>
      </ChannelIntro>

      <ChannelButtonGroup video={video} />
    </StyledVideoChannel>
  );
}

export default VideoChannel;
