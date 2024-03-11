import type { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';

import { axiosClient } from '@/apis';
import { queryKeys } from '@/constants';
import type { IBotCard, ErrorResponse } from '@/interfaces';

export const useGetCards = (nodeId: string) =>
  useQuery<IBotCard[], AxiosError<ErrorResponse>>({
    queryKey: [queryKeys.CARD, nodeId],
    queryFn: () => axiosClient.get(`/cards/${nodeId}`).then(({ data }) => data),
  });
