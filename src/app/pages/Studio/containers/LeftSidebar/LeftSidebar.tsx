import { Box } from '@chakra-ui/react';
import { PiFlowArrow } from 'react-icons/pi';

import { styles } from './styles';
import type { LeftSidebarProps } from './interfaces';

import { Explorers } from '../../constants';

// TODO: Refine UI
export const LeftSidebar = ({
  explorer,
  onToggleExplorer,
}: LeftSidebarProps) => {
  return (
    <Box sx={styles.leftSidebar}>
      <Box
        sx={styles.buttonContainer}
        onClick={onToggleExplorer(Explorers.FLOW)}
        color={explorer === Explorers.FLOW ? 'gray.studio.600' : 'black'}
        backgroundColor={
          explorer === Explorers.FLOW ? 'gray.studio.200' : 'transparent'
        }
      >
        <PiFlowArrow
          style={{ width: '100%', height: '100%', padding: '0.125rem' }}
        />
      </Box>
    </Box>
  );
};
