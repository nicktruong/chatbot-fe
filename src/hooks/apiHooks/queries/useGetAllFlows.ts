import type { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';

import { axiosClient } from '@/apis';
import { queryKeys } from '@/constants';
import type { Flow, ErrorResponse } from '@/interfaces';

export const useGetAllFlows = (botId: string) =>
  useQuery<Flow[], AxiosError<ErrorResponse>>({
    queryKey: [queryKeys.FLOW],
    queryFn: () => axiosClient.get(`/flows/${botId}`).then(({ data }) => data),
  });
