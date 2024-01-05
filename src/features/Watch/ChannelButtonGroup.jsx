import styled from 'styled-components';

import ShareIcon from '../../assets/icons/share.svg?react';
import SaveIcon from '../../assets/icons/save.svg?react';
import ReportIcon from '../../assets/icons/report.svg?react';
import SpecBtnIcon from '../../assets/icons/spec-btn.svg?react';
import LikeIcon from '../../assets/icons/like.svg?react';
import DislikeIcon from '../../assets/icons/dislike.svg?react';
import { MEDIA_QUERY_LG } from '../../utils/constants';
import { countFormat } from '../../utils/helpers';

const ButtonGroup = styled.div`
  display: flex;
  padding-bottom: 12px;
  overflow-x: scroll;
  white-space: nowrap;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  /* Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.5rem;
  padding: 0 16px;
  height: 2.25rem;
  border: none;
  border-radius: 18px;
  background-color: #f2f2f2;
  cursor: pointer;

  ${MEDIA_QUERY_LG} {
    ${({ $hide }) => $hide === 'lg' && `display: none`}
  }
`;

const EndButton = styled(Button)`
  padding: 0;
  width: 2.25rem;
  height: 2.25rem;
  span {
    width: 1.5rem;
    height: 1.5;
  }
`;

const BeLikeButton = styled.div`
  display: flex;
  margin-right: 0.5rem;
  padding: 0 16px;
  height: 2.25rem;
  border-radius: 18px;
  background-color: #f2f2f2;
`;

const LikeButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0;
  border: none;
  cursor: pointer;
  &:after {
    content: '|';
    margin: 0 0.5rem;
  }
`;

const DislikeButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0;
  border: none;
  cursor: pointer;
`;

function ChannelButtonGroup({ video }) {
  return (
    <ButtonGroup>
      <BeLikeButton>
        <LikeButton>
          <LikeIcon />
          <span>{countFormat(video.statistics.likeCount)}</span>
        </LikeButton>

        <DislikeButton>
          <DislikeIcon />
        </DislikeButton>
      </BeLikeButton>

      <Button>
        <ShareIcon />
        <span>分享</span>
      </Button>

      <Button $hide="lg">
        <SaveIcon />
        <span>儲存</span>
      </Button>

      <Button $hide="lg">
        <ReportIcon />
        <span>檢舉</span>
      </Button>
      <EndButton>
        <span>
          <SpecBtnIcon />
        </span>
      </EndButton>
    </ButtonGroup>
  );
}

export default ChannelButtonGroup;
