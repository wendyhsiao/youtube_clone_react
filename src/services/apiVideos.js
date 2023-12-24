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

export async function getResultVideos({ searchQuery, pageParam }) {
  const searchParams = {
    part: 'snippet',
    q: searchQuery,
    type: 'video',
    // regionCode: 'TW',
    maxResults: 20,
    key: import.meta.env.VITE_REACT_APP_YT_API_KEY,
    pageToken: pageParam,
  };

  const searchURL = new URLSearchParams(searchParams);
  const { data } = await apiHelper.get(`search?${searchURL.toString()}`);
  // const { data } = await apiFake.get('fetchSearchResult');

  return data;
}

export async function getVideo(vidoId) {
  const searchParams = {
    id: vidoId,
    key: import.meta.env.VITE_REACT_APP_YT_API_KEY,
    part: 'snippet,statistics',
  };

  const searchURL = new URLSearchParams(searchParams);
  const { data } = await apiHelper.get(`videos?${searchURL.toString()}`);
  // const { data } = await apiFake.get('fetchVideo');

  return data;
}

export async function getRelatedVideos(pageParam) {
  const searchParams = {
    part: 'snippet',
    type: 'video',
    // relatedToVideoId: id,
    maxResults: 20,
    key: import.meta.env.VITE_REACT_APP_YT_API_KEY,
    pageToken: pageParam,
  };

  const searchURL = new URLSearchParams(searchParams);
  const { data } = await apiHelper.get(`search?${searchURL.toString()}`);
  // const { data } = await apiFake.get('fetchUpNext');

  return data;
}

export async function getComments(videoId, pageParam) {
  const searchParams = {
    part: 'snippet,replies',
    videoId: videoId,
    maxResults: 40,
    pageToken: pageParam,
    key: import.meta.env.VITE_REACT_APP_YT_API_KEY,
  };
  const searchURL = new URLSearchParams(searchParams);
  const { data } = await apiHelper.get(
    `commentThreads?${searchURL.toString()}`
  );
  // const { data } = await apiFake.get('fetchComments');

  return data;
}
