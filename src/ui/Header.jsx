import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Logo from './Logo';
import SearchContent from './SearchContent';
import { MEDIA_QUERY_MD } from '../utils/constants';

const StyledHeader = styled.header`
  height: 48px;
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 3;
  background-color: white;

  ${MEDIA_QUERY_MD} {
    height: 56px;
  }
`;

const StyledLink = styled(Link)`
  width: 113px;
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
