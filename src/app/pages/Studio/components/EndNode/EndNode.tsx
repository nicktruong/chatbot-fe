import { Position } from 'reactflow';
import { Box, Text } from '@chakra-ui/react';

import { styles } from './styles';

import { CustomHandle } from '../Handle';

export const EndNode = () => {
  return (
    <Box>
      <CustomHandle position={Position.Left} type="target" />

      <Box sx={styles.container}>
        <Text fontSize="sm" fontWeight={600}>
          End
        </Text>
      </Box>
    </Box>
  );
};
