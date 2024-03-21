import axios, { AxiosError } from 'axios';

import { HttpStatus } from '@/enums';
import { routes } from '@/app/routes';
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

axiosClient.interceptors.response.use(
  response => response.data,
  (error: AxiosError) => {
    if (error.response?.status === HttpStatus.UNAUTHORIZED) {
      localStorage.removeItem(storageKeys.ACCESS_TOKEN);
      window.location.pathname !== routes.login && window.location.reload();
    }

    return Promise.reject(error);
  },
);
