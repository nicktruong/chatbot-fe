import ReactFlow, {
  Background,
  BackgroundVariant,
  ConnectionLineType,
} from 'reactflow';

import { nodeTypes } from './constants';
import { usePrepareHook } from './helpers';

export const Canvas = () => {
  const { edges, nodes, onConnect, onEdgesChange, onNodesChange } =
    usePrepareHook();

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      nodeTypes={nodeTypes}
      onConnect={onConnect}
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
    </ReactFlow>
  );
};
