import { useInfiniteQuery, useQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';
import { getComments } from '../../services/apiVideos';

export function useComments() {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get('v');

  const {
    isLoading,
    data: comments,
    error,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    ['comments', videoId],
    ({ pageParam = '' }) => getComments(videoId, pageParam),
    {
      getNextPageParam: (lastPage) => lastPage?.nextPageToken || null,
    }
  );

  return { isLoading, comments, error, fetchNextPage, hasNextPage };
}
