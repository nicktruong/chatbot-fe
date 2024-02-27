import { Box } from '@chakra-ui/react';
import { Resizable } from 'react-resizable';

import { styles } from './styles';
import { usePrepareHook } from './helpers';
import type { ExplorerProps } from './interfaces';

import { ExplorerHandle } from '../../components/ExplorerHandle';

export const Explorer = ({ open, onOpen, onClose }: ExplorerProps) => {
  const {
    width,
    dragging,
    resizableContentRef,
    onResize,
    onResizeStop,
    onResizeStart,
  } = usePrepareHook({ open, onOpen, onClose });

  return (
    <Resizable
      axis="x"
      onResize={onResize}
      onResizeStop={onResizeStop}
      onResizeStart={onResizeStart}
      width={open || dragging ? width : 0}
      handle={<ExplorerHandle dragging={dragging} />}
    >
      <Box
        sx={styles.explorerContent}
        ref={resizableContentRef}
        width={open || dragging ? width : 0}
      >
        {/* <span>Contents</span> */}
      </Box>
    </Resizable>
  );
};
