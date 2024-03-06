import type { AxiosError, AxiosResponse } from 'axios';
import { useMutation, type UseMutationOptions } from '@tanstack/react-query';

import { axiosClient } from '@/apis';
import { queryKeys } from '@/constants';
import type { ErrorResponse, Card, CreateCard } from '@/interfaces';

export const useCreateCardMutation = ({
  mutationFn,
  mutationKey,
  ...options
}: UseMutationOptions<
  AxiosResponse<Card>,
  AxiosError<ErrorResponse>,
  CreateCard
>) =>
  useMutation({
    mutationKey: [queryKeys.CREATE_CARD],
    mutationFn: data =>
      axiosClient.post('/cards', data).then(({ data }) => data),
    ...options,
  });
