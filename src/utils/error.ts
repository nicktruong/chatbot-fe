import { isAxiosError } from 'axios';

import { HttpStatus, type HttpStatusKey } from '@/enums';

export const isError = (error: Error, statusCode: HttpStatusKey) => {
  return (
    isAxiosError(error) && error.response?.status === HttpStatus[statusCode]
  );
};
