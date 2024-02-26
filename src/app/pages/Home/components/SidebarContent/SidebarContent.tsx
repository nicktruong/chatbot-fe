import { Link, Navigate } from 'react-router-dom';
import { Box, IconButton, Spinner, Text } from '@chakra-ui/react';

import { GoPlus } from 'react-icons/go';
import { RxOpenInNewWindow } from 'react-icons/rx';

import { routes } from '@/app/routes';
import { NoMessagesIcon } from '@/assets';

import { styles } from './styles';
import { messages } from './messages';
import { usePrepareHook } from './helpers';

export const SidebarContent = () => {
  const {
    bots,
    botId,
    location,
    isPending,
    isHomeRoute,
    isChatbotRoute,
    isChatbotDetailRoute,
    t,
    onCreateBot,
  } = usePrepareHook();

  if (bots?.length && (isHomeRoute || isChatbotRoute)) {
    return <Navigate to={routes.chatbotDetail.replace(':id', bots[0].id)} />;
  }

  if (isHomeRoute) {
    return <Navigate to={routes.chatbot} />;
  }

  if (
    // If isDetailPage but have no bots or the botId is invalid
    // => redirect to route chatbot
    isChatbotDetailRoute &&
    (!bots?.length || !bots?.find(bot => bot.id === botId))
  ) {
    return <Navigate to={routes.chatbot} />;
  }

  return (
    <>
      <Box as="button" sx={styles.createChatbotBtn} onClick={onCreateBot}>
        <Text fontSize="sm">{t(messages.createChatbot)}</Text>
        {!isPending ? <GoPlus fontSize="1.25rem" /> : <Spinner size="sm" />}
      </Box>
      <Box marginTop="1rem">
        {!!bots?.length ? (
          bots.map(bot => {
            const isActive = location.pathname.includes(bot.id);
            return (
              <Box
                as={Link}
                key={bot.id}
                to={routes.chatbotDetail.replace(':id', bot.id)}
                background={isActive ? 'gray.100' : 'transparent'}
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
        )}
      </Box>
    </>
  );
};
