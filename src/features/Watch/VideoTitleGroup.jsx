import styled from 'styled-components';
import { MEDIA_QUERY_MD } from '../../utils/constants';
import { countFormat } from '../../utils/helpers';
import dayjs from 'dayjs';
import BottomSheets from '../../ui/BottomSheets';
import VideoDescriptionMobile from './VideoDescriptionMobile';

const StyledTitleGroupMobile = styled.div`
  padding: 0 12px 9px;
  /* display: flex;
  justify-content: space-between; */

  ${MEDIA_QUERY_MD} {
    display: none;
  }
`;

const StyledTitleGroup = styled.div`
  padding: 0 12px 9px;
  display: none;

  ${MEDIA_QUERY_MD} {
    display: flex;
    justify-content: space-between;
  }
`;

const StyledTitle = styled.h2`
  padding-bottom: 4px;
`;

const ReadMoreSpan = styled.span`
  margin-left: 0.5rem;
  cursor: pointer;
`;

function VideoTitleGroup({ video, titleGroupRef }) {
  return (
    <>
      <StyledTitleGroupMobile>
        <StyledTitle>{video.snippet.title}</StyledTitle>
        <span>
          觀看次數：{countFormat(video.statistics.viewCount)}次 ·{' '}
          {dayjs(video.snippet.publishedAt).fromNow()}
        </span>
        <BottomSheets>
          <BottomSheets.Open opens="description">
            <ReadMoreSpan>...更多內容</ReadMoreSpan>
          </BottomSheets.Open>
          <BottomSheets.Window name="description" title="說明">
            <VideoDescriptionMobile video={video} />
          </BottomSheets.Window>
        </BottomSheets>
      </StyledTitleGroupMobile>

      <StyledTitleGroup ref={titleGroupRef}>
        <StyledTitle>{video.snippet.title}</StyledTitle>
      </StyledTitleGroup>
    </>
  );
}

export default VideoTitleGroup;
