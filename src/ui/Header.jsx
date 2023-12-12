import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Logo from './Logo';
import SearchContent from './SearchContent';

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 3;
  background-color: white;
`;

const StyledLink = styled(Link)`
  width: 113px;
  height: 48px;
  padding: 14px 12px;
`;

function Header() {
  return (
    <StyledHeader>
      <StyledLink to="/">
        <Logo />
      </StyledLink>
      <SearchContent />
    </StyledHeader>
  );
}

export default Header;
