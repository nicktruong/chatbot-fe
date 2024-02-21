import { useMutation } from '@tanstack/react-query';

import { axiosClient } from 'utils/axios';
import { queryKeys } from 'constants/queryKeys';

import type { LoginSchemaType } from 'app';
import type { AxiosError, AxiosResponse } from 'axios';
import type { LoginResponse, ErrorResponse } from 'interfaces';
import type { UseMutationOptions } from '@tanstack/react-query';

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
