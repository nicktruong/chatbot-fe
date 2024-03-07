import type { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';

import { axiosClient } from '@/apis';
import { queryKeys } from '@/constants';
import type { Edge, DataResponse, ErrorResponse } from '@/interfaces';

export const useGetEdgeByCardOrNodeId = ({
  id,
  type,
}: {
  id: string;
  type: 'card' | 'node';
}) =>
  useQuery<DataResponse<Edge>, AxiosError<ErrorResponse>>({
    queryKey: [queryKeys.EDGE, id],
    queryFn: () =>
      axiosClient.get(`/edges/${type}-${id}`).then(({ data }) => data),
  });
