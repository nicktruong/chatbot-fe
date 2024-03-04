import { XYPosition } from 'reactflow';
import type { AxiosError } from 'axios';
import { UseMutationOptions, useMutation } from '@tanstack/react-query';

import type {
  DataResponse,
  ErrorResponse,
  ChangedPosition,
} from '@/interfaces';
import { axiosClient } from '@/apis';
import { queryKeys } from '@/constants';

export const useChangeNodePositionMutation = ({
  mutationFn,
  mutationKey,
  ...options
}: UseMutationOptions<
  DataResponse<ChangedPosition>,
  AxiosError<ErrorResponse>,
  { nodeId: string; position?: XYPosition }
>) =>
  useMutation({
    mutationKey: [queryKeys.CHANGE_POSITION],
    mutationFn: ({ nodeId, position }) =>
      axiosClient
        .put(`/nodes/change-position/${nodeId}`, position)
        .then(({ data }) => data),
    ...options,
  });
