import { useQuery } from '@tanstack/react-query';

import { axiosClient } from '@/apis';
import { queryKeys } from '@/constants';

import type { AxiosError } from 'axios';
import type { Bot, DataResponse, ErrorResponse } from '@/interfaces';

export const useGetMyBots = () =>
  useQuery<DataResponse<Bot[]>, AxiosError<ErrorResponse>>({
    queryKey: [queryKeys.BOTS],
    queryFn: () => axiosClient.get('/bots').then(({ data }) => data),
  });
