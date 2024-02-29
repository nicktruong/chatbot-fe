import { Box } from '@chakra-ui/react';
import { PiFlowArrow } from 'react-icons/pi';

import { styles } from './styles';
import { usePrepareHook } from './helpers';

import { ExplorerType } from '../../constants';

// TODO: Refine UI
export const LeftSidebar = () => {
  const { getBtnColor, getBtnBgColor, onToggleExplorer } = usePrepareHook();

  return (
    <Box sx={styles.leftSidebar}>
      <Box
        sx={styles.buttonContainer}
        color={getBtnColor(ExplorerType.FLOW)}
        onClick={onToggleExplorer(ExplorerType.FLOW)}
        backgroundColor={getBtnBgColor(ExplorerType.FLOW)}
      >
        <PiFlowArrow
          style={{ width: '100%', height: '100%', padding: '0.125rem' }}
        />
      </Box>
    </Box>
  );
};
