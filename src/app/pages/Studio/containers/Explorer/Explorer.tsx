import { Resizable } from 'react-resizable';
import { Box, Text } from '@chakra-ui/react';
import { MdOutlineStart } from 'react-icons/md';
import { HiChevronDoubleLeft } from 'react-icons/hi2';

import { styles } from './styles';
import { messages } from './messages';
import { usePrepareHook } from './helpers';
import type { ExplorerProps } from './interfaces';

import { MIN_EXPLORER_WIDTH } from '../../constants';
import { ExplorerHandle } from '../../components/ExplorerHandle';

// TODO: Refine UI
export const Explorer = ({ open, onOpen, onClose }: ExplorerProps) => {
  const {
    width,
    dragging,
    resizableContentRef,
    t,
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
        ref={resizableContentRef}
        sx={styles.explorerContent}
        width={open || dragging ? width : 0}
      >
        <Box
          visibility={
            width < MIN_EXPLORER_WIDTH / 2 || !open ? 'hidden' : 'visible'
          }
        >
          <Box sx={styles.explorerHeader}>
            <Text sx={styles.explorerHeaderText}>{t(messages.files)}</Text>
            <HiChevronDoubleLeft
              onClick={onClose}
              style={{ fontSize: '1rem', color: '#a3a3a3', cursor: 'pointer' }}
            />
          </Box>

          <Box sx={styles.infoAndAction}>
            {/* TODO: Get from API */}
            <Text sx={styles.projectName}>Project name</Text>
          </Box>

          <Box sx={styles.flows}>
            <Box sx={styles.flow} backgroundColor="gray.studio.200">
              <MdOutlineStart
                style={{ fontSize: '0.875rem', color: '#7f838d' }}
              />
              {/* TODO: Get from API */}
              <Text fontWeight={600} color="black" sx={styles.flowName}>
                Main
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Resizable>
  );
};
