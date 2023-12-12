// eslint-disable-next-line no-unused-vars
import { apiHelper, apiFake } from './apis';

export async function getVideos() {
  const searchParams = {
    part: 'snippet,statistics',
    chart: 'mostPopular',
    type: 'video',
    regionCode: 'TW',
    maxResults: 20,
    key: import.meta.env.VITE_REACT_APP_YT_API_KEY,
  };

  const searchURL = new URLSearchParams(searchParams);
  const { data } = await apiHelper.get(`videos?${searchURL.toString()}`);
  // const {data} = await apiFake.get('fetchVideoList');

  return data;
}
