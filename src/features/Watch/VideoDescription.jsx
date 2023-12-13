import styled from 'styled-components';
import { MEDIA_QUERY_MD } from '../../utils/constants';

const Wrapper = styled.div`
  display: none;
  padding: 12px;
  border-radius: 12px;
  background-color: #f2f2f2;
  /* height: 104px; */

  ${MEDIA_QUERY_MD} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const Description = styled.div`
  white-space: pre-wrap;
  overflow-wrap: break-word;

  /* overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; */
`;

const Button = styled.button`
  border: 0;
`;

function VideoDescription() {
  return (
    <Wrapper>
      <span>觀看次數：XXX次 · X天前</span>
      <Description>XXXXX</Description>
      <Button>顯示完整資訊</Button>
      {/* 只顯示部分資訊 */}
    </Wrapper>
  );
}

export default VideoDescription;
