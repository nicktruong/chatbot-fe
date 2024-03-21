import { QueryClient } from '@tanstack/react-query';

import { isError } from '@/utils';

export const setupQueryClient = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: (failureCount, error) => {
          if (isError(error, 'UNAUTHORIZED') || failureCount >= 3) {
            return false;
          }

          return true;
        },
      },
    },
  });

  return queryClient;
};
