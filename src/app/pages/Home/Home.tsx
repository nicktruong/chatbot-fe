import { Box, Tabs } from '@chakra-ui/react';

import { styles } from './styles';
import { usePrepareHook } from './helpers';
import { Appbar, HomeContent, Sidebar } from './components';

export const Home = () => {
  const { tabIndex, onTabsChange } = usePrepareHook();

  return (
    <Box sx={styles.container}>
      <Sidebar />
      <Tabs
        sx={styles.tabs}
        index={tabIndex}
        variant="unstyled"
        onChange={onTabsChange}
      >
        <Appbar />
        <HomeContent />
      </Tabs>
    </Box>
  );
};
