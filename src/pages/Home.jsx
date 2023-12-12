import styled from 'styled-components';
import HomeCard from '../features/Home/HomeCard';

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

function Home() {
  return (
    <>
      <Ul>
        <HomeCard />
      </Ul>
    </>
  );
}

export default Home;
