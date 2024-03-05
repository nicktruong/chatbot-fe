import { Position } from 'reactflow';
import { Box, Text } from '@chakra-ui/react';
import { FaBookOpen } from 'react-icons/fa6';

import { styles } from './styles';

import { CustomHandle } from '../Handle';

export const StartNode = () => {
  return (
    <Box>
      <Box sx={styles.container}>
        <Text fontSize="sm" fontWeight={600}>
          Start
        </Text>
        <FaBookOpen />
      </Box>

      <CustomHandle
        type="source"
        style={{ right: -10 }}
        position={Position.Right}
      />
    </Box>
  );
};
