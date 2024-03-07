import type { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';

import { axiosClient } from '@/apis';
import { queryKeys } from '@/constants';
import type { Bot, ErrorResponse } from '@/interfaces';

export const useGetMyBots = () =>
  useQuery<Bot[], AxiosError<ErrorResponse>>({
    queryKey: [queryKeys.BOTS],
    queryFn: () => axiosClient.get('/bots').then(({ data }) => data),
  });
