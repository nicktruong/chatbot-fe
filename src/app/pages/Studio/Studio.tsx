import { Box } from '@chakra-ui/react';
import ReactFlow, { Background, BackgroundVariant } from 'reactflow';

import { styles } from './styles';
import { usePrepareHook } from './helpers';
import { Explorer, LeftSidebar } from './containers';

import 'reactflow/dist/style.css';
import 'react-resizable/css/styles.css';

export const Studio = () => {
  const {
    edges,
    nodes,
    explorer,
    onConnect,
    onEdgesChange,
    onNodesChange,
    onOpenExplorer,
    onCloseExplorer,
    onToggleExplorer,
  } = usePrepareHook();

  return (
    <Box sx={styles.container}>
      <ReactFlow
        fitView
        nodes={nodes}
        edges={edges}
        onConnect={onConnect}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
      >
        <Background
          gap={12}
          size={2}
          color="#e0e1e7"
          variant={BackgroundVariant.Dots}
        />
      </ReactFlow>

      <Box sx={styles.leftBarContainer}>
        <LeftSidebar explorer={explorer} onToggleExplorer={onToggleExplorer} />
        <Explorer
          open={explorer != null}
          onOpen={onOpenExplorer(explorer)}
          onClose={onCloseExplorer(explorer)}
        />
      </Box>
    </Box>
  );
};
