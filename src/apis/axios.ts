import axios, { AxiosError } from 'axios';

import { HttpStatus } from '@/enums';
import { routes } from '@/app/routes';
import { storageKeys } from '@/constants';

const baseURL = process.env.REACT_APP_API_BASE_URL;

export const axiosClient = axios.create({
  baseURL,
});

axiosClient.interceptors.request.use(config => {
  const accessToken = localStorage.getItem(storageKeys.ACCESS_TOKEN);
  config.headers.Authorization = accessToken
    ? `Bearer ${accessToken}`
    : undefined;

  return config;
});

let refreshTokenPromise: undefined | Promise<any>;

axiosClient.interceptors.response.use(
  response => response.data,
  (error: AxiosError) => {
    const originalRequest = error.config;

    if (error.response?.status === HttpStatus.UNAUTHORIZED && originalRequest) {
      if (!refreshTokenPromise) {
        const refreshToken = localStorage.getItem(storageKeys.REFRESH_TOKEN);

        refreshTokenPromise = axios.post(`${baseURL}/refresh`, {
          refreshToken,
        });
      }

      return refreshTokenPromise
        ?.then(({ data }) => {
          const { accessToken, refreshToken } = data.data;
          localStorage.setItem(storageKeys.ACCESS_TOKEN, accessToken);
          localStorage.setItem(storageKeys.REFRESH_TOKEN, refreshToken);

          // Required to return axiosClient to "continue" the request
          return axiosClient(originalRequest);
        })
        .catch(error => {
          localStorage.removeItem(storageKeys.ACCESS_TOKEN);
          localStorage.removeItem(storageKeys.REFRESH_TOKEN);
          window.location.pathname !== routes.login && window.location.reload();

          throw error;
        });
    }

    return Promise.reject(error);
  },
);
