import type { AxiosError } from 'axios';
import { useMutation, type UseMutationOptions } from '@tanstack/react-query';

import { axiosClient } from '@/apis';
import { queryKeys } from '@/constants';
import type { ErrorResponse } from '@/interfaces';

export const useLogoutMutation = ({
  mutationFn,
  mutationKey,
  ...options
}: UseMutationOptions<unknown, AxiosError<ErrorResponse>>) =>
  useMutation({
    mutationKey: [queryKeys.LOGOUT],
    mutationFn: () => axiosClient.post('/logout'),
    ...options,
  });
