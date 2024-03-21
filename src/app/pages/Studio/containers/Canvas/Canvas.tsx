import ReactFlow, {
  Background,
  BackgroundVariant,
  ConnectionLineType,
} from 'reactflow';

import { colors } from '@/styles';
import { CanvasProvider } from '@studio/contexts';

import { ContextMenu } from './components';
import { usePrepareHook } from './helpers';
import { nodeTypes } from './nodeTypesMapping';

export const Canvas = () => {
  const {
    edges,
    nodes,
    onConnect,
    onShowMenu,
    onEdgesChange,
    onNodesChange,
    onCloseCardTray,
  } = usePrepareHook();

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      nodeTypes={nodeTypes}
      onConnect={onConnect}
      onContextMenu={onShowMenu}
      onPaneClick={onCloseCardTray}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      proOptions={{ hideAttribution: true }}
      connectionLineType={ConnectionLineType.SmoothStep}
    >
      <Background
        gap={12}
        size={2}
        variant={BackgroundVariant.Dots}
        color={colors.studioLight.gray[300]}
      />
      <ContextMenu />
    </ReactFlow>
  );
};

export const CanvasWrapper = () => {
  return (
    <CanvasProvider>
      <Canvas />
    </CanvasProvider>
  );
};
