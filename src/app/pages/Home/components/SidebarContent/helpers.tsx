import {
  matchPath,
  useParams,
  useLocation,
  useNavigate,
  generatePath,
} from 'react-router-dom';
import { useEffect, useMemo } from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { Box, Text, IconButton } from '@chakra-ui/react';
import { useMutationState, useQueryClient } from '@tanstack/react-query';

import { routes } from '@/app/routes';
import { FlowTypeEnum } from '@/enums';
import { queryKeys } from '@/constants';
import { NoMessagesIcon } from '@/assets';
import { useCreateBotMutation, useGetMyBots } from '@/hooks';

import { styles } from './styles';
import { messages } from './messages';

export const usePrepareHook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();
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

  const bots = useMemo(
    () => data?.filter(bot => !idsToBeDeleted.includes(bot.id)) ?? [],
    [data, idsToBeDeleted],
  );

  const handleCreateBot = () => {
    mutate();
  };

  useEffect(() => {
    const isHomeRoute = !!matchPath(routes.home, pathname);
    const isChatbotRoute = !!matchPath(routes.chatbot, pathname);
    const isChatbotDetailRoute = !!matchPath(routes.chatbotDetail, pathname);

    if (bots.length > 0 && (isHomeRoute || isChatbotRoute)) {
      navigate(generatePath(routes.chatbotDetail, { id: bots[0].id }));
    }

    if (isHomeRoute) {
      navigate(routes.chatbot);
    }

    if (
      // If isDetailPage but have no bots or the botId is invalid
      // => redirect to route chatbot
      isChatbotDetailRoute &&
      (bots.length === 0 || !bots.find(bot => bot.id === id))
    ) {
      navigate(routes.chatbot);
    }
  }, [id, bots, pathname, navigate]);

  const renderBots = () => {
    return bots.length > 0 ? (
      bots.map(bot => {
        const isActive = bot.id === id;

        return (
          <Box
            key={bot.id}
            background={isActive ? 'gray.100' : 'transparent'}
            // to={generatePath(routes.chatbotDetail, { id: bot.id })}
            onClick={() => {
              navigate(generatePath(routes.chatbotDetail, { id: bot.id }));
            }}
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
              colorScheme="blue"
              id="open-studio-btn"
              aria-label="Open Studio"
              sx={styles.openStudioBtn}
              onClick={event => {
                event.stopPropagation();
                navigate(
                  generatePath(routes.studio, {
                    id,
                    flow: FlowTypeEnum.MAIN.toLowerCase(),
                  }),
                );
              }}
              icon={<FaRegEdit fontSize="0.75rem" />}
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
    isPending,
    t,
    renderBots,
    onCreateBot: handleCreateBot,
  };
};
