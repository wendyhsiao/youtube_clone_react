import { useQuery } from 'react-query';
import { getVideos } from '../../services/apiVideos';

export function useVideos() {
  const { isLoading, data: videos, error } = useQuery('homeVieos', getVideos);

  return { isLoading, videos, error };
}
