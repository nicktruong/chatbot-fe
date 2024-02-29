import ReactFlow, { Background, BackgroundVariant } from 'reactflow';

import { usePrepareHook } from './helpers';

export const Canvas = () => {
  const { edges, nodes, onConnect, onEdgesChange, onNodesChange } =
    usePrepareHook();

  return (
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
  );
};
