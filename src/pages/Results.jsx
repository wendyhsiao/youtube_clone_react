import { useRef } from 'react';
import { useResults } from '../features/Results/useResults';

function Results() {
  const nextPageTokenRef = useRef(null);
  const { isLoading, videos, error } = useResults();

  if (!videos?.etag) return <p>no data</p>;

  nextPageTokenRef.current = videos.nextPageToken;

  return <div>Results page</div>;
}

export default Results;
