import { GoPlus } from 'react-icons/go';
import { Box, Spinner, Text } from '@chakra-ui/react';

import { styles } from './styles';
import { messages } from './messages';
import { usePrepareHook } from './helpers';

export const SidebarContent = () => {
  const { isPending, t, renderBots, onCreateBot } = usePrepareHook();

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
