import { useMutation } from '@tanstack/react-query';

import { axiosClient } from '@/apis';
import { queryKeys } from '@/constants';

import type { LoginSchemaType } from '@/app';
import type { AxiosError, AxiosResponse } from 'axios';
import type { UseMutationOptions } from '@tanstack/react-query';
import type { LoginResponse, ErrorResponse } from '@/interfaces';

export const useLoginMutation = ({
  mutationFn,
  mutationKey,
  ...options
}: UseMutationOptions<
  AxiosResponse<LoginResponse>,
  AxiosError<ErrorResponse>,
  LoginSchemaType
>) =>
  useMutation<
    AxiosResponse<LoginResponse>,
    AxiosError<ErrorResponse>,
    LoginSchemaType
  >({
    mutationKey: [queryKeys.LOGIN],
    mutationFn: registerData =>
      axiosClient.post('/login', registerData).then(({ data }) => data),
    ...options,
  });
