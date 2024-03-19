import { XYPosition } from 'reactflow';
import type { AxiosError } from 'axios';
import { UseMutationOptions, useMutation } from '@tanstack/react-query';

import { axiosClient } from '@/apis';
import { queryKeys } from '@/constants';
import type { ErrorResponse, ChangedPosition } from '@/interfaces';

export const useChangeNodePositionMutation = ({
  mutationFn,
  mutationKey,
  ...options
}: UseMutationOptions<
  ChangedPosition,
  AxiosError<ErrorResponse>,
  { nodeId: string; position?: XYPosition }
>) =>
  useMutation({
    mutationKey: [queryKeys.CHANGE_POSITION],
    mutationFn: ({ nodeId, position }) =>
      axiosClient
        .put(`/nodes/${nodeId}/position`, position)
        .then(({ data }) => data),
    ...options,
  });
