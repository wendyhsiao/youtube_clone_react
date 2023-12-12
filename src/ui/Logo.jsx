import styled from 'styled-components';
import LogoIcon from '../assets/icons/logo.svg?react';

const Img = styled(LogoIcon)`
  width: 100%;
`;

function Logo() {
  return <Img />;
}

export default Logo;
