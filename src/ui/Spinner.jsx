import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  margin: 12px auto;
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
  border: 2px solid #eee;
  border-top: #666;
  animation: ${rotate} 1s linear infinite;
`;

export default Spinner;
