import { useTranslation } from 'react-i18next';
import { RxOpenInNewWindow } from 'react-icons/rx';
import { Box, Text, IconButton } from '@chakra-ui/react';
import { Link, generatePath, useNavigate, useParams } from 'react-router-dom';
import { useMutationState, useQueryClient } from '@tanstack/react-query';

import { routes } from '@/app/routes';
import { queryKeys } from '@/constants';
import { NoMessagesIcon } from '@/assets';
import { useCreateBotMutation, useGetMyBots, useIsRoute } from '@/hooks';

import { styles } from './styles';
import { messages } from './messages';

export const usePrepareHook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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

  if (bots?.length && (isHomeRoute || isChatbotRoute)) {
    navigate(generatePath(routes.chatbotDetail, { id: bots[0].id }));
  }

  if (isHomeRoute) {
    navigate(routes.chatbot);
  }

  if (
    // If isDetailPage but have no bots or the botId is invalid
    // => redirect to route chatbot
    isChatbotDetailRoute &&
    (!bots?.length || !bots?.find(bot => bot.id === id))
  ) {
    navigate(routes.chatbot);
  }

  const renderBots = () => {
    return !!bots?.length ? (
      bots.map(bot => {
        const isActive = bot.id === id;

        return (
          <Box
            as={Link}
            key={bot.id}
            background={isActive ? 'gray.100' : 'transparent'}
            to={generatePath(routes.chatbotDetail, { id: bot.id })}
            sx={{
              ...styles.chatbotContainer,
              _hover: {
                ...styles.chatbotContainer._hover,
                backgroundColor: isActive ? 'gray.100' : 'gray.50',
              },
            }}
          >
            <Text fontSize="sm" fontWeight={500}>
              {bot.name}
            </Text>

            <IconButton
              id="open-studio-btn"
              colorScheme="blue"
              aria-label="Open Studio"
              sx={styles.openStudioBtn}
              icon={<RxOpenInNewWindow fontSize="0.875rem" />}
            />
          </Box>
        );
      })
    ) : (
      <>
        <NoMessagesIcon width="100%" />
        <Text sx={styles.emptyText}>
          {t(messages.thisWorkspaceDoesntHaveChatbotsYet)}
        </Text>
      </>
    );
  };

  return {
    bots,
    isPending,
    botId: id,
    isHomeRoute,
    isChatbotRoute,
    isChatbotDetailRoute,
    t,
    renderBots,
    onCreateBot: handleCreateBot,
  };
};
