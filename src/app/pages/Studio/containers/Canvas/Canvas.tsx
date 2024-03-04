import ReactFlow, {
  Background,
  BackgroundVariant,
  ConnectionLineType,
} from 'reactflow';

import { colors } from '@/styles';

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
        variant={BackgroundVariant.Dots}
        color={colors.studioLight.gray[300]}
      />
    </ReactFlow>
  );
};
