import { Fragment } from 'react';
import styled from 'styled-components';

import { useResults } from '../features/Results/useResults';
import ResultsCard from '../features/Results/ResultsCard';
import Spinner from '../ui/Spinner';

const Contents = styled.div`
  margin: 0 auto;
  padding: 1rem 1.5rem;
  max-width: 1096px;
  /* background-color: pink; */
`;

const List = styled.ul``;

function Results() {
  const { isLoading, videos, error, fetchNextPage, hasNextPage } = useResults();

  if (!videos?.pages.length) return <p>no data</p>;

  return (
    <Contents>
      <List>
        {videos.pages.map((group, i) => (
          <Fragment key={i}>
            {group.items.map((video) => (
              <ResultsCard video={video} key={video.etag} />
            ))}
          </Fragment>
        ))}
      </List>
      {hasNextPage && <Spinner func={fetchNextPage} />}
    </Contents>
  );
}

export default Results;
