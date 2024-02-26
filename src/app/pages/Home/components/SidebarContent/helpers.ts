import { useTranslation } from 'react-i18next';
import { useLocation, useParams } from 'react-router-dom';
import { useMutationState, useQueryClient } from '@tanstack/react-query';

import { routes } from '@/app/routes';
import { queryKeys } from '@/constants';
import { useCreateBotMutation, useGetMyBots, useIsRoute } from '@/hooks';

import { messages } from './messages';

export const usePrepareHook = () => {
  const { id } = useParams();
  const location = useLocation();
  const queryClient = useQueryClient();
  const { t } = useTranslation(messages.ns);

  const { isPending, mutate } = useCreateBotMutation({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKeys.BOTS] });
    },
  });

  const { data } = useGetMyBots();

  // Optimistic update: filter out the bots on the sidebar before deleting successfully
  const idsToBeDeleted = useMutationState({
    filters: { mutationKey: [queryKeys.DELETE_BOT], status: 'pending' },
    select: mutation => mutation.state.variables,
  });

  const bots = data?.data.filter(bot => !idsToBeDeleted.includes(bot.id));

  const handleCreateBot = () => {
    mutate();
  };

  const isHomeRoute = useIsRoute(routes.home);
  const isChatbotRoute = useIsRoute(routes.chatbot);
  const isChatbotDetailRoute = useIsRoute(routes.chatbotDetail);

  return {
    bots,
    location,
    isPending,
    botId: id,
    isHomeRoute,
    isChatbotRoute,
    isChatbotDetailRoute,
    t,
    onCreateBot: handleCreateBot,
  };
};
