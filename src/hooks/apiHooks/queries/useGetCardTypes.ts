import type { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';

import { axiosClient } from '@/apis';
import { queryKeys } from '@/constants';
import type { CardType, DataResponse, ErrorResponse } from '@/interfaces';

export const useGetCardTypes = () =>
  useQuery<DataResponse<CardType[]>, AxiosError<ErrorResponse>>({
    queryKey: [queryKeys.CARD_TYPE],
    queryFn: () => axiosClient.get('/card-types').then(({ data }) => data),
  });
