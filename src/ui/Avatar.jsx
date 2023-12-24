import styled from 'styled-components';

const StyledAvatar = styled.div`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
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

function Avatar({ url, size = '40px', className }) {
  return (
    <StyledAvatar size={size} className={className}>
      <AvatarImg src={url} />
    </StyledAvatar>
  );
}

export default Avatar;
