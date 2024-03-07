import type { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';

import { axiosClient } from '@/apis';
import { queryKeys } from '@/constants';
import type { Card, ErrorResponse } from '@/interfaces';

export const useGetCards = (nodeId: string) =>
  useQuery<Card[], AxiosError<ErrorResponse>>({
    queryKey: [queryKeys.CARD, nodeId],
    queryFn: () => axiosClient.get(`/cards/${nodeId}`).then(({ data }) => data),
  });
