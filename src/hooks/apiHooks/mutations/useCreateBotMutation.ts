import type { AxiosError } from 'axios';
import { UseMutationOptions, useMutation } from '@tanstack/react-query';

import { axiosClient } from '@/apis';
import { queryKeys } from '@/constants';
import type { Bot, ErrorResponse } from '@/interfaces';

export const useCreateBotMutation = ({
  mutationFn,
  mutationKey,
  ...options
}: UseMutationOptions<Bot, AxiosError<ErrorResponse>, void>) =>
  useMutation({
    mutationKey: [queryKeys.CREATE_BOT],
    mutationFn: () => axiosClient.post('/bots').then(({ data }) => data),
    ...options,
  });
