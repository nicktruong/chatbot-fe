import { UseMutationOptions, useMutation } from '@tanstack/react-query';

import { axiosClient } from '@/apis';
import { queryKeys } from '@/constants';

import type { AxiosError } from 'axios';
import type { Bot, DataResponse, ErrorResponse } from '@/interfaces';

export const useCreateBotMutation = ({
  mutationFn,
  mutationKey,
  ...options
}: UseMutationOptions<DataResponse<Bot>, AxiosError<ErrorResponse>, void>) =>
  useMutation({
    mutationKey: [queryKeys.CREATE_BOT],
    mutationFn: () => axiosClient.post('/bots').then(({ data }) => data),
    ...options,
  });
