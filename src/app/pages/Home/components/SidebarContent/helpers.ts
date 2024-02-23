import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useQueryClient } from '@tanstack/react-query';

import { queryKeys } from '@/constants';
import { useCreateBotMutation, useGetMyBots } from '@/hooks';

import { messages } from './messages';

export const usePrepareHook = () => {
  const location = useLocation();
  const queryClient = useQueryClient();
  const { t } = useTranslation(messages.ns);

  const { isPending, mutate } = useCreateBotMutation({
    onSuccess: () => {
      // TODO: Invalidate get bots queries
      queryClient.invalidateQueries({ queryKey: [queryKeys.BOTS] });
    },
  });

  const { data } = useGetMyBots();

  const handleCreateBot = () => {
    mutate();
  };

  return {
    location,
    isPending,
    bots: data?.data,
    t,
    onCreateBot: handleCreateBot,
  };
};
