import { useQuery } from '@tanstack/react-query';

import { axiosClient } from '@/apis';
import { queryKeys } from '@/constants';

import type { AxiosError } from 'axios';
import type { DataResponse, ErrorResponse, UserDetail } from '@/interfaces';

export const useGetMe = () =>
  useQuery<DataResponse<UserDetail>, AxiosError<ErrorResponse>>({
    queryKey: [queryKeys.USER],
    queryFn: () => axiosClient.get('/customers/me').then(({ data }) => data),
  });
