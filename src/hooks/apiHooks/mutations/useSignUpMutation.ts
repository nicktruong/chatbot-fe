import { useMutation } from '@tanstack/react-query';

import { axiosClient } from 'utils/axios';
import { queryKeys } from 'constants/queryKeys';

import type { AxiosError } from 'axios';
import type { SignUpSchemaType } from 'app';
import type { ErrorResponse } from 'interfaces';
import type { UseMutationOptions } from '@tanstack/react-query';

export const useSignUpMutation = ({
  mutationFn,
  mutationKey,
  ...options
}: UseMutationOptions<unknown, AxiosError<ErrorResponse>, SignUpSchemaType>) =>
  useMutation<unknown, AxiosError<ErrorResponse>, SignUpSchemaType>({
    mutationKey: [queryKeys.SIGN_UP],
    mutationFn: registerData => axiosClient.post('/register', registerData),
    ...options,
  });
