import styled from 'styled-components';
import HomeCard from '../features/Home/HomeCard';

import { useVideos } from '../features/Home/useVideos';
import Loader from '../features/Home/Loader';

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

function Home() {
  const { isLoading, videos, error } = useVideos();

  const { items } = videos ?? [];

  if (isLoading) return <Loader />;
  if (!items?.length) return <p>no data</p>;

  return (
    <Ul>
      {items.map((video) => (
        <HomeCard video={video} key={video.id} />
      ))}
    </Ul>
  );
}

export default Home;
