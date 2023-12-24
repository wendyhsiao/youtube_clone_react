import styled from 'styled-components';

const VideoLayout = styled.div`
  position: relative;
  padding-bottom: 56.25%;
`;
const VideoContents = styled.div`
  position: absolute;
  inset: 0;
`;
const StyledIframe = styled.iframe`
  width: 100%;
  height: 100%;
`;

function VideoIframe({ id }) {
  const embedURL = `https://www.youtube.com/embed/${id}`;

  return (
    <VideoLayout>
      <VideoContents>
        <StyledIframe
          src={embedURL}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></StyledIframe>
      </VideoContents>
    </VideoLayout>
  );
}

export default VideoIframe;
