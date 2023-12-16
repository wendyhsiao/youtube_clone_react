import styled, { keyframes } from 'styled-components';
import useLoadMore from '../hook/useLoadMore';

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const StyledSpinner = styled.div`
  margin: 12px auto;
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
  border: 2px solid #eee;
  border-top: #666;
  animation: ${rotate} 1s linear infinite;
`;

function Spinner({ func }) {
  const { domRef } = useLoadMore({
    fetchApi: func,
  });

  return <StyledSpinner ref={domRef} />;
}
export default Spinner;
