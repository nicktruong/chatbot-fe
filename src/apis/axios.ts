import axios, { AxiosError } from 'axios';

import { routes } from '@/app/routes';
import { SettingsManager } from '@/utils';
import { HttpStatus, StorageKeys } from '@/enums';

const settingsManager = SettingsManager.getInstance();

const baseURL = process.env.REACT_APP_API_BASE_URL;

export const axiosClient = axios.create({
  baseURL,
});

axiosClient.interceptors.request.use(config => {
  const accessToken = settingsManager.getItem<string>(StorageKeys.ACCESS_TOKEN);

  config.headers.Authorization = accessToken
    ? `Bearer ${accessToken}`
    : undefined;

  return config;
});

// Prevent multiple calls to refresh token endpoint when invalidate
let refreshTokenPromise: undefined | Promise<any>;

axiosClient.interceptors.response.use(
  response => response.data,
  (error: AxiosError) => {
    const originalRequest = error.config;

    if (error.response?.status === HttpStatus.UNAUTHORIZED && originalRequest) {
      if (!refreshTokenPromise) {
        const refreshToken = settingsManager.getItem<string>(
          StorageKeys.REFRESH_TOKEN,
        );

        refreshTokenPromise = axiosClient.post(`${baseURL}/refresh`, {
          refreshToken,
        });
      }

      return refreshTokenPromise
        ?.then(({ data }) => {
          const { accessToken, refreshToken } = data;
          settingsManager.setItem(StorageKeys.ACCESS_TOKEN, accessToken);
          settingsManager.setItem(StorageKeys.REFRESH_TOKEN, refreshToken);

          // Required to return axiosClient to "continue" the request
          return axiosClient(originalRequest);
        })
        .catch(error => {
          settingsManager.removeItem(StorageKeys.ACCESS_TOKEN);
          settingsManager.removeItem(StorageKeys.REFRESH_TOKEN);
          window.location.pathname !== routes.login && window.location.reload();

          throw error;
        });
    }

    return Promise.reject(error);
  },
);
