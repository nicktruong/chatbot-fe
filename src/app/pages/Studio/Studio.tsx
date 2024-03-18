import 'reactflow/dist/style.css';
import 'react-resizable/css/styles.css';

import { Box, ChakraProvider } from '@chakra-ui/react';

import { themes } from '@/styles';

import {
  Canvas,
  CardTray,
  Explorer,
  LeftSidebar,
  PropertiesPanel,
} from './containers';
import { styles } from './styles';

export const Studio = () => {
  return (
    <ChakraProvider theme={themes.studioLight}>
      <Box sx={styles.container}>
        <Box sx={styles.leftBarContainer}>
          <LeftSidebar />
          <Explorer />
          <CardTray />
        </Box>
        <Canvas />
        <Box sx={styles.rightBarContainer}>
          <PropertiesPanel />
        </Box>
      </Box>
    </ChakraProvider>
  );
};
