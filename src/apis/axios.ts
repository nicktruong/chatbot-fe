import axios from 'axios';

import { storageKeys } from '@/constants';

export const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

axiosClient.interceptors.request.use(config => {
  const accessToken = localStorage.getItem(storageKeys.ACCESS_TOKEN);
  config.headers.Authorization = accessToken
    ? `Bearer ${accessToken}`
    : undefined;

  return config;
});

// TODO: Intercept response, if unauthorized => logout user (remove accessToken, and reset states)
