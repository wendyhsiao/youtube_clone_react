import { useRef } from 'react';
import styled from 'styled-components';

import { useResults } from '../features/Results/useResults';
import ResultsCard from '../features/Results/ResultsCard';

const Contents = styled.div`
  margin: 0 auto;
  padding: 1rem 1.5rem;
  max-width: 1096px;
  /* background-color: pink; */
`;

const List = styled.ul``;

function Results() {
  const nextPageTokenRef = useRef(null);
  const { isLoading, videos, error } = useResults();
  // console.log('videos', videos, videos?.etag);

  if (!videos?.etag) return <p>no data</p>;
  const { items } = videos ?? [];
  nextPageTokenRef.current = videos.nextPageToken;

  return (
    <Contents>
      <List>
        {items.map((video) => (
          <ResultsCard video={video} key={video.etag} />
        ))}
      </List>
    </Contents>
  );
}

export default Results;
