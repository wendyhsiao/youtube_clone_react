import axios from 'axios';

const baseURL = 'https://www.googleapis.com/youtube/v3/';
const apiHelper = axios.create({
  baseURL,
});

// Postman mock server
const apiFake = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_POSTMAN_MOCK_URL,
  headers: { 'x-api-key': import.meta.env.VITE_REACT_APP_X_API_KEY }, // 60 天過期
});

export { apiHelper, apiFake };
