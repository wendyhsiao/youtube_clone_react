import styled from 'styled-components';

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

function Header() {
  return <StyledHeader>Header</StyledHeader>;
}

export default Header;
