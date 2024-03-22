import { UseMutationOptions, useMutation } from '@tanstack/react-query';

import { axiosClient } from '@/apis';
import { queryKeys } from '@/constants';

import type { AxiosError } from 'axios';
import type { ErrorResponse } from '@/interfaces';

export const useDeleteCardMutation = ({
  mutationFn,
  mutationKey,
  ...options
}: UseMutationOptions<number, AxiosError<ErrorResponse>, string> = {}) =>
  useMutation({
    mutationKey: [queryKeys.DELETE_CARD, ...(mutationKey ?? [])],
    mutationFn: id =>
      axiosClient.delete(`/cards/${id}`).then(({ data }) => data),
    ...options,
  });
