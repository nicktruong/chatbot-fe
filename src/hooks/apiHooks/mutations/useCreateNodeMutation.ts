import { AxiosError } from 'axios';
import { ErrorResponse } from 'react-router-dom';
import { UseMutationOptions, useMutation } from '@tanstack/react-query';

import { axiosClient } from '@/apis';
import { queryKeys } from '@/constants';
import type { CreateNode, DataResponse, Node } from '@/interfaces';

export const useCreateNodeMutation = ({
  mutationFn,
  mutationKey,
  ...options
}: UseMutationOptions<
  DataResponse<Node>,
  AxiosError<ErrorResponse>,
  CreateNode
>) =>
  useMutation({
    mutationKey: [queryKeys.CREATE_NODE],
    mutationFn: data =>
      axiosClient.post('/nodes', data).then(({ data }) => data),
    ...options,
  });
