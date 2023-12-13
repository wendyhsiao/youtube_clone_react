import styled from 'styled-components';
import { MEDIA_QUERY_LG, MEDIA_QUERY_MD } from '../../utils/constants';
import ChannelButtonGroup from './ChannelButtonGroup';

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

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  margin-right: 12px;
  border-radius: 100%;
  background-color: #f3f3f3;
  overflow: hidden;
`;

const AvatarImg = styled.img`
  height: 100%;
  object-fit: cover;
`;

const Button = styled.button`
  margin-left: 0.5rem;
  padding: 0 16px;
  height: 2.25rem;
  border-radius: 18px;
  color: white;
  background-color: black;
`;

function VideoChannel() {
  return (
    <StyledVideoChannel>
      <ChannelIntro>
        <Intro>
          <Avatar>
            <AvatarImg />
          </Avatar>

          <div>
            <h3>channel title</h3>
            <span>XX萬 位訂閱者</span>
          </div>
        </Intro>

        <Button>訂閱</Button>
      </ChannelIntro>

      <ChannelButtonGroup />
    </StyledVideoChannel>
  );
}

export default VideoChannel;
