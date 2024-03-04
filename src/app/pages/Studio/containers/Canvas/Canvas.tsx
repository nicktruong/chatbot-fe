import ReactFlow, {
  Background,
  BackgroundVariant,
  ConnectionLineType,
} from 'reactflow';

import { nodeTypes } from './constants';
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
        color="#e0e1e7"
        variant={BackgroundVariant.Dots}
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
