import { AxiosError } from 'axios';
import { UseMutationOptions, useMutation } from '@tanstack/react-query';

import type {
  CreateEdge,
  CreatedEdge,
  DataResponse,
  ErrorResponse,
} from '@/interfaces';
import { axiosClient } from '@/apis';
import { queryKeys } from '@/constants';

export const useCreateEdgeMutation = ({
  mutationFn,
  mutationKey,
  ...options
}: UseMutationOptions<
  DataResponse<CreatedEdge>,
  AxiosError<ErrorResponse>,
  CreateEdge
>) =>
  useMutation({
    mutationKey: [queryKeys.CREATE_EDGE],
    mutationFn: (data: CreateEdge) =>
      axiosClient.post('/edges', data).then(({ data }) => data),
    ...options,
  });
