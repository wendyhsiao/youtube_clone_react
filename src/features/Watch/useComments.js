import { useQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';
import { getComments } from '../../services/apiVideos';

export function useComments(nextPageToken = '') {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get('v');

  const {
    isLoading,
    data: comments,
    error,
  } = useQuery(['comments', videoId, nextPageToken], () =>
    getComments(videoId, nextPageToken)
  );

  return { isLoading, comments, error };
}
