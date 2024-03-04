import { useCallback, useEffect } from 'react';
import { Connection, addEdge, useEdgesState, useNodesState } from 'reactflow';

import { selectFlowId } from '@/store/studio';
import { useAppSelector, useGetNodes } from '@/hooks';

export const usePrepareHook = () => {
  const flowId = useAppSelector(selectFlowId);
  const { data } = useGetNodes(flowId);
  const nodesData = data?.data;

  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  useEffect(() => {
    if (!nodesData) return;

    const nodes = nodesData.map(data => ({
      id: data.id,
      data: { value: 123 }, // data: {value: any} is required by reactflow
      type: data.nodeType.type,
      position: { x: data.x, y: data.y },
    }));

    setNodes(nodes);
  }, [nodesData, setNodes]);

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
