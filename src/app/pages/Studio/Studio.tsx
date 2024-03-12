import 'reactflow/dist/style.css';
import 'react-resizable/css/styles.css';

import { Box, ChakraProvider } from '@chakra-ui/react';

import { themes } from '@/styles';

import { styles } from './styles';
import { Canvas, Explorer, LeftSidebar } from './containers';

export const Studio = () => {
  return (
    <ChakraProvider theme={themes.studioLight}>
      <Box sx={styles.container}>
        <Box sx={styles.leftBarContainer}>
          <LeftSidebar />
          <Explorer />
        </Box>
        <Canvas />
      </Box>
    </ChakraProvider>
  );
};
