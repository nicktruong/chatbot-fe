import { GoPlus } from 'react-icons/go';
import { Box, Spinner, Text } from '@chakra-ui/react';
import { Navigate, generatePath } from 'react-router-dom';

import { routes } from '@/app/routes';

import { styles } from './styles';
import { messages } from './messages';
import { usePrepareHook } from './helpers';

export const SidebarContent = () => {
  const {
    bots,
    botId,
    isPending,
    isHomeRoute,
    isChatbotRoute,
    isChatbotDetailRoute,
    t,
    renderBots,
    onCreateBot,
  } = usePrepareHook();

  if (bots?.length && (isHomeRoute || isChatbotRoute)) {
    return (
      <Navigate to={generatePath(routes.chatbotDetail, { id: bots[0].id })} />
    );
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
      <Box marginTop="1rem">{renderBots()}</Box>
    </>
  );
};
