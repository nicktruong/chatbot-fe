import { Position } from 'reactflow';
import { Box, Text } from '@chakra-ui/react';

import { styles } from './styles';

import { CustomHandle } from '../Handle';

export const EndNode = () => {
  return (
    <Box>
      <CustomHandle
        type="target"
        style={{ left: -10 }}
        position={Position.Left}
      />

      <Box sx={styles.container}>
        <Text fontSize="sm" fontWeight={600}>
          End
        </Text>
      </Box>
    </Box>
  );
};
