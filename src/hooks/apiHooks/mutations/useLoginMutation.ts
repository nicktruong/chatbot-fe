import type { AxiosError } from 'axios';
import { useMutation, type UseMutationOptions } from '@tanstack/react-query';

import { axiosClient } from '@/apis';
import { queryKeys } from '@/constants';
import type { LoginSchemaType } from '@/app';
import type { LoginResponse, ErrorResponse } from '@/interfaces';

export const useLoginMutation = ({
  mutationFn,
  mutationKey,
  ...options
}: UseMutationOptions<
  LoginResponse,
  AxiosError<ErrorResponse>,
  LoginSchemaType
>) =>
  useMutation({
    mutationKey: [queryKeys.LOGIN],
    mutationFn: registerData =>
      axiosClient.post('/login', registerData).then(({ data }) => data),
    ...options,
  });
