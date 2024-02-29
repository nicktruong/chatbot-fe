import { useCallback } from 'react';
import { Connection, addEdge, useEdgesState, useNodesState } from 'reactflow';

// TODO: Declare interfaces for nodes, edges, and integrate APIs
const initialNodes: any[] = [];
const initialEdges: any[] = [];

export const usePrepareHook = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const handleConnect = useCallback(
    (params: Connection) => setEdges(eds => addEdge(params, eds)),
    [setEdges],
  );

  return {
    edges,
    nodes,
    onEdgesChange,
    onNodesChange,
    onConnect: handleConnect,
  };
};
