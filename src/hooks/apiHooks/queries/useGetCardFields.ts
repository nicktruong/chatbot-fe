import type { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';

import { axiosClient } from '@/apis';
import { queryKeys } from '@/constants';
import type { ErrorResponse, Field } from '@/interfaces';

export const useGetCardFields = (cardId: string = '') =>
  useQuery<Field[], AxiosError<ErrorResponse>>({
    enabled: !!cardId,
    queryKey: [queryKeys.FIELD, cardId],
    queryFn: () =>
      axiosClient.get(`/fields/${cardId}`).then(({ data }) => data),
  });
