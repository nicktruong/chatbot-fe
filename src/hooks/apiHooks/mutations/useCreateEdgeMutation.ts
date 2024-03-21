import { AxiosError } from 'axios';
import { UseMutationOptions, useMutation } from '@tanstack/react-query';

import { axiosClient } from '@/apis';
import { queryKeys } from '@/constants';
import type { CreateEdge, CreatedEdge, ErrorResponse } from '@/interfaces';

export const useCreateEdgeMutation = ({
  mutationFn,
  mutationKey,
  ...options
}: UseMutationOptions<CreatedEdge, AxiosError<ErrorResponse>, CreateEdge>) =>
  useMutation({
    mutationKey: [queryKeys.CREATE_EDGE],
    mutationFn: (data: CreateEdge) =>
      axiosClient.post('/edges', data).then(({ data }) => data),
    ...options,
  });
