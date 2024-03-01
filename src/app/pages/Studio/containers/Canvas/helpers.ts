import { useCallback } from 'react';
import { Connection, addEdge, useEdgesState, useNodesState } from 'reactflow';

export const usePrepareHook = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([
    {
      id: 'node-3',
      type: 'startNode',
      position: { x: 350, y: 50 },
      data: { value: 123 },
    },
    {
      id: 'node-1',
      type: 'standardNode',
      position: { x: 350, y: 125 },
      data: { value: 123 },
    },
    {
      id: 'node-2',
      type: 'standardNode',
      position: { x: 350, y: 275 },
      data: { value: 123 },
    },
    {
      id: 'node-4',
      type: 'endNode',
      position: { x: 700, y: 300 },
      data: { value: 123 },
    },
  ]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const handleConnect = useCallback(
    (params: Connection) =>
      setEdges(eds => addEdge({ ...params, type: 'smoothstep' }, eds)),
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
