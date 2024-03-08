import type { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';

import { axiosClient } from '@/apis';
import { queryKeys } from '@/constants';
import type { Edge, ErrorResponse } from '@/interfaces';

export const useGetEdgeByCardOrNodeId = ({
  id,
  type,
}: {
  id: string;
  type: 'card' | 'node';
}) =>
  useQuery<Edge, AxiosError<ErrorResponse>>({
    queryKey: [queryKeys.EDGE, id],
    queryFn: () =>
      axiosClient
        .get(`/edges/${id}`, { params: { type } })
        .then(({ data }) => data),
  });
