import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useQueryClient } from '@tanstack/react-query';

import { queryKeys } from '@/constants';
import { useGetMyBots, useDeleteBotMutation } from '@/hooks';

import { messages } from './messages';

export const usePrepareHook = () => {
  const { id } = useParams();

  const queryClient = useQueryClient();
  const { t, i18n } = useTranslation(messages.ns);

  const { data: bots } = useGetMyBots();
  const botDetail = useMemo(() => bots?.find(bot => bot.id === id), [id, bots]);

  const { isPending, mutate } = useDeleteBotMutation({
    onSuccess: () => {
      return queryClient.invalidateQueries({ queryKey: [queryKeys.BOTS] });
    },
  });

  const handleDeleteChatbot = () => {
    mutate(id ?? '');
  };

  return {
    botDetail,
    isPending,
    lng: i18n.resolvedLanguage,
    t,
    onDeleteChatbot: handleDeleteChatbot,
  };
};
