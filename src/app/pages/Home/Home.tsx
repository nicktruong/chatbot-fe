import { Box, Tabs } from '@chakra-ui/react';

import { styles } from './styles';
import { Appbar, HomeContent, Sidebar } from './components';

export const Home = () => {
  return (
    <Box sx={styles.container}>
      <Sidebar />
      <Tabs variant="unstyled" sx={styles.tabs}>
        <Appbar />
        <HomeContent />
      </Tabs>
    </Box>
  );
};
