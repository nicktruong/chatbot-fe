import type { AxiosError } from 'axios';
import { useMutation, type UseMutationOptions } from '@tanstack/react-query';

import { axiosClient } from '@/apis';
import { queryKeys } from '@/constants';
import type { ErrorResponse, UpdateField } from '@/interfaces';

export const useUpdateFieldMutation = ({
  mutationFn,
  mutationKey,
  ...options
}: UseMutationOptions<void, AxiosError<ErrorResponse>, UpdateField, any>) =>
  useMutation({
    mutationKey: [queryKeys.UPDATE_FIELD],
    mutationFn: ({ fieldId, ...data }) =>
      axiosClient.put(`/fields/${fieldId}`, data).then(({ data }) => data),
    ...options,
  });
