import { Box } from '@chakra-ui/react';

import { styles } from './styles';
import type { ChatBubbleProps } from './interfaces';

export const ChatBubble = ({ children, perspective }: ChatBubbleProps) => {
  const dynamicStyle = perspective === 'bot' ? styles.bot : styles.user;

  return (
    <Box
      sx={{
        ...styles.container,
        ...dynamicStyle,
      }}
    >
      {children}
    </Box>
  );
};
