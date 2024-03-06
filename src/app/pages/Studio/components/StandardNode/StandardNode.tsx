import { Position } from 'reactflow';
import { IoIosAdd } from 'react-icons/io';
import { Box, Text } from '@chakra-ui/react';
import { MdTextFields } from 'react-icons/md';

import { styles } from './styles';
import { usePrepareHook } from './helpers';

import { CustomHandle } from '../Handle';

export const StandardNode = () => {
  const { onOpenCardTray } = usePrepareHook();

  return (
    <Box>
      <CustomHandle position={Position.Top} type="target" />
      <Box sx={styles.container}>
        <Box sx={styles.nodeName}>Standard</Box>
        <Box sx={styles.nodeBody}>
          <Box sx={styles.card}>
            <MdTextFields style={{ color: '#008001' }} />
            <Text sx={styles.cardContent}>
              👋 Welcome on **Botpress Studio**!
            </Text>
          </Box>
          <Box sx={styles.addCard} onClick={onOpenCardTray}>
            <IoIosAdd style={{ margin: '0 0.5rem', fontSize: '0.875rem' }} />
            <Text>Add Card</Text>
          </Box>
        </Box>
      </Box>
      <CustomHandle position={Position.Right} type="source" />
    </Box>
  );
};
