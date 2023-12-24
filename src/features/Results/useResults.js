import { useInfiniteQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';
import { getResultVideos } from '../../services/apiVideos';

export function useResults() {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search_query');

  const {
    isLoading,
    data: videos,
    error,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    ['resultVideos', searchQuery],
    ({ pageParam = '' }) => getResultVideos({ searchQuery, pageParam }),
    {
      getNextPageParam: (lastPage) => lastPage?.nextPageToken || null,
    }
  );

  return {
    isLoading,
    videos,
    error,
    fetchNextPage,
    hasNextPage,
  };
}
