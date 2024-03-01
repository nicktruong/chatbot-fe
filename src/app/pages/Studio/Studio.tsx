import { Box } from '@chakra-ui/react';

import { styles } from './styles';
import { Canvas, Explorer, LeftSidebar } from './containers';

import 'reactflow/dist/style.css';
import 'react-resizable/css/styles.css';

export const Studio = () => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.leftBarContainer}>
        <LeftSidebar />
        <Explorer />
      </Box>
      <Canvas />
    </Box>
  );
};
