import { useInfiniteQuery } from 'react-query';
import { getRelatedVideos } from '../../services/apiVideos';

export function useRelated() {
  const {
    isLoading,
    data: videos,
    error,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    ['related'],
    ({ pageParam = '' }) => getRelatedVideos(pageParam),
    {
      getNextPageParam: (lastPage) => lastPage?.nextPageToken || null,
    }
  );

  return { isLoading, videos, error, fetchNextPage, hasNextPage };
}
