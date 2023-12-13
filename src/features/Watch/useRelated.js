import { useQuery } from 'react-query';
import { getRelatedVideos } from '../../services/apiVideos';

export function useRelated(nextPageToken = '') {
  const {
    isLoading,
    data: videos,
    error,
  } = useQuery(['related', nextPageToken], () =>
    getRelatedVideos(nextPageToken)
  );

  return { isLoading, videos, error };
}
