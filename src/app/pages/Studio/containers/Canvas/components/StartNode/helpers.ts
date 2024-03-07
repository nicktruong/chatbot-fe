import { Edge, addEdge } from 'reactflow';
import { useContext, useEffect } from 'react';

import { CanvasContext } from '@studio/contexts';
import { useGetEdgeByCardOrNodeId } from '@/hooks';

export const usePrepareHook = (nodeId: string) => {
  const { data: edgeData, isFetching } = useGetEdgeByCardOrNodeId({
    id: nodeId,
    type: 'node',
  });

  const { setEdges } = useContext(CanvasContext);

  useEffect(() => {
    if (!edgeData || isFetching) return;

    const edge: Edge = {
      id: edgeData.id,
      type: 'smoothstep',
      source: edgeData.sourceNodeId,
      target: edgeData.targetNodeId,
    };

    setEdges(eds => addEdge({ ...edge, data: edgeData.sourceNodeId }, eds));
  }, [edgeData, isFetching, setEdges]);
};
