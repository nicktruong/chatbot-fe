import type { AxiosError, AxiosResponse } from 'axios';
import { useMutation, type UseMutationOptions } from '@tanstack/react-query';

import { axiosClient } from '@/apis';
import { queryKeys } from '@/constants';
import type { ErrorResponse, IBotCard, CreateCard } from '@/interfaces';

export const useCreateCardMutation = ({
  mutationFn,
  mutationKey,
  ...options
}: UseMutationOptions<
  AxiosResponse<IBotCard>,
  AxiosError<ErrorResponse>,
  CreateCard
>) =>
  useMutation({
    mutationKey: [queryKeys.CREATE_CARD, ...(mutationKey ?? [])],
    mutationFn: data =>
      axiosClient.post('/cards', data).then(({ data }) => data),
    ...options,
  });
