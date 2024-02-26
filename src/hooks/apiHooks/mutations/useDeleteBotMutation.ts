import { UseMutationOptions, useMutation } from '@tanstack/react-query';

import { axiosClient } from '@/apis';
import { queryKeys } from '@/constants';

import type { AxiosError } from 'axios';
import type { DataResponse, ErrorResponse } from '@/interfaces';

export const useDeleteBotMutation = ({
  mutationFn,
  mutationKey,
  ...options
}: UseMutationOptions<
  DataResponse<string>,
  AxiosError<ErrorResponse>,
  string
> = {}) =>
  useMutation({
    mutationKey: [queryKeys.DELETE_BOT],
    mutationFn: id =>
      axiosClient.delete(`/bots/${id}`).then(({ data }) => data),
    ...options,
  });
