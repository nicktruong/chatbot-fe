import { useTranslation } from 'react-i18next';
import { useQueryClient } from '@tanstack/react-query';
import { generatePath, useNavigate, useParams } from 'react-router-dom';

import { routes } from '@/app/routes';
import { queryKeys } from '@/constants';
import { useGetMyBots, useDeleteBotMutation } from '@/hooks';

import { messages } from './messages';

export const usePrepareHook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { t, i18n } = useTranslation(messages.ns);

  const { data } = useGetMyBots();
  const bots = data?.data;
  const botDetail = bots?.find(bot => bot.id === id);

  const { isPending, mutate } = useDeleteBotMutation({
    onSuccess: () => {
      return queryClient.invalidateQueries({ queryKey: [queryKeys.BOTS] });
    },
  });

  const handleDeleteChatbot = () => {
    mutate(id ?? '');

    if (bots && bots.length > 1) {
      const botId = bots.find(bot => bot.id !== id)?.id ?? '';

      navigate(
        generatePath(routes.chatbotDetail, {
          id: botId,
        }),
      );
    }
  };

  return {
    botDetail,
    isPending,
    lng: i18n.resolvedLanguage,
    t,
    onDeleteChatbot: handleDeleteChatbot,
  };
};
