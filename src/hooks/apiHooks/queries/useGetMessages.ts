import type { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';

import { axiosClient } from '@/apis';
import { queryKeys } from '@/constants';

import type { ErrorResponse, Message } from '@/interfaces';

export const useGetMessages = (botId: string) =>
  useQuery<Message[], AxiosError<ErrorResponse>>({
    queryKey: [queryKeys.MESSAGE, botId],
    queryFn: () =>
      axiosClient.get(`/messages/${botId}`).then(({ data }) => data),
  });
