import type { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';

import { axiosClient } from '@/apis';
import { queryKeys } from '@/constants';
import type { DataResponse, ErrorResponse, Node } from '@/interfaces';

export const useGetNodes = (flowId: string) =>
  useQuery<DataResponse<Node[]>, AxiosError<ErrorResponse>>({
    enabled: !!flowId,
    queryKey: [queryKeys.NODE, flowId],
    queryFn: () => axiosClient.get(`/nodes/${flowId}`).then(({ data }) => data),
  });
