import { Box } from '@chakra-ui/react';

import { styles } from './styles';
import { Sidebar, TabContainer } from './containers';

export const Home = () => {
  return (
    <Box sx={styles.container}>
      <Sidebar />
      <TabContainer />
    </Box>
  );
};
