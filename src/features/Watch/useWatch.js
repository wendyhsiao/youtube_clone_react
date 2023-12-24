import { useQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';
import { getVideo } from '../../services/apiVideos';

export function useWatch() {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get('v');

  const {
    isLoading,
    data: video,
    error,
  } = useQuery(['watch', videoId], () => getVideo(videoId));

  return { isLoading, video, error };
}
