import ReactFlow, {
  Background,
  BackgroundVariant,
  ConnectionLineType,
} from 'reactflow';

import { colors } from '@/styles';

import { nodeTypes } from './nodeTypesMapping';
import { usePrepareHook } from './helpers';

import { ContextMenu } from '../../components';
import { CanvasProvider } from '../../contexts';

export const Canvas = () => {
  const { edges, nodes, onConnect, onEdgesChange, onNodesChange, onShowMenu } =
    usePrepareHook();

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      nodeTypes={nodeTypes}
      onConnect={onConnect}
      onContextMenu={onShowMenu}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
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
