import { useQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';
import { getResultVideos } from '../../services/apiVideos';

export function useResults(nextPageToken = '') {
  const [seatchParams] = useSearchParams();
  const searchQuery = seatchParams.get('search_query');

  const {
    isLoading,
    data: videos,
    error,
  } = useQuery(['resultVieos', searchQuery, nextPageToken], () =>
    getResultVideos(searchQuery, nextPageToken)
  );

  return { isLoading, videos, error };
}
