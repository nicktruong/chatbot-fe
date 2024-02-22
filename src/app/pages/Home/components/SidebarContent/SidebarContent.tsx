import { GoPlus } from 'react-icons/go';
import { Box, Text } from '@chakra-ui/react';

import { NoMessagesIcon } from '@/assets';

import { styles } from './styles';
import { messages } from './messages';
import { usePrepareHook } from './helpers';

export const SidebarContent = () => {
  const { t } = usePrepareHook();

  return (
    <>
      <Box sx={styles.container}>
        <Text fontSize="sm">{t(messages.createChatbot)}</Text>
        <GoPlus fontSize="1.25rem" />
      </Box>
      <Box marginTop="1rem">
        <NoMessagesIcon width="100%" />
        <Text sx={styles.emptyText}>
          {t(messages.thisWorkspaceDoesntHaveChatbotsYet)}
        </Text>
      </Box>
    </>
  );
};
