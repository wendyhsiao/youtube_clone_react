import styled from 'styled-components';
import { MEDIA_QUERY_MD } from '../../utils/constants';

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

function VideoTitleGroup() {
  return (
    <>
      <StyledTitleGroupMobile>
        <StyledTitle>title</StyledTitle>
        <span>觀看次數：XXX次 · X天前</span>
        <ReadMoreSpan>...更多內容</ReadMoreSpan>
      </StyledTitleGroupMobile>

      <StyledTitleGroup>
        <StyledTitle>title</StyledTitle>
      </StyledTitleGroup>
    </>
  );
}

export default VideoTitleGroup;
