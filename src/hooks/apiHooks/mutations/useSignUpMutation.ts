import type { AxiosError } from 'axios';
import { useMutation, type UseMutationOptions } from '@tanstack/react-query';

import { axiosClient } from '@/apis';
import { queryKeys } from '@/constants';
import type { SignUpSchemaType } from '@/app';
import type { ErrorResponse } from '@/interfaces';

export const useSignUpMutation = ({
  mutationFn,
  mutationKey,
  ...options
}: UseMutationOptions<unknown, AxiosError<ErrorResponse>, SignUpSchemaType>) =>
  useMutation({
    mutationKey: [queryKeys.SIGN_UP],
    mutationFn: registerData => axiosClient.post('/register', registerData),
    ...options,
  });
