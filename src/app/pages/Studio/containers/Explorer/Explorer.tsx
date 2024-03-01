import { Resizable } from 'react-resizable';
import { Box, Text } from '@chakra-ui/react';
import { HiChevronDoubleLeft } from 'react-icons/hi2';

import { colors } from '@/styles';

import { styles } from './styles';
import { messages } from './messages';
import { usePrepareHook } from './helpers';

import { Flows, ExplorerHandle } from '../../components';

// TODO: Refine UI
export const Explorer = () => {
  const {
    open,
    width,
    dragging,
    botDetail,
    resizableContentRef,
    t,
    onResize,
    onResizeStop,
    onResizeStart,
    onCloseExplorer,
  } = usePrepareHook();

  return (
    <Resizable
      axis="x"
      onResize={onResize}
      width={open ? width : 0}
      onResizeStop={onResizeStop}
      onResizeStart={onResizeStart}
      handle={<ExplorerHandle dragging={dragging} />}
    >
      <Box
        width={open ? width : 0}
        ref={resizableContentRef}
        sx={styles.explorerContent}
      >
        <Box visibility={open ? 'visible' : 'hidden'}>
          <Box sx={styles.explorerHeader}>
            <Text sx={styles.explorerHeaderText}>{t(messages.files)}</Text>
            <HiChevronDoubleLeft
              onClick={onCloseExplorer}
              style={{
                fontSize: '1rem',
                cursor: 'pointer',
                color: colors.light.gray[400],
              }}
            />
          </Box>

          <Box sx={styles.infoAndAction}>
            {/* TODO: Get from API */}
            <Text sx={styles.projectName}>{botDetail?.name}</Text>
          </Box>

          <Box sx={styles.flows}>
            <Flows />
          </Box>
        </Box>
      </Box>
    </Resizable>
  );
};
