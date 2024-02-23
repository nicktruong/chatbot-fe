import { Box, Show } from '@chakra-ui/react';

import { styles } from './styles';

export const Sidebar = () => {
  return (
    <Show above="md">
      <Box sx={styles.container}>
        <Box sx={styles.sidebar}>Sidebar</Box>
      </Box>
    </Show>
  );
};
