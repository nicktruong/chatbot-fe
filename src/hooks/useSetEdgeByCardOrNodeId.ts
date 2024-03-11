import { Edge, addEdge } from 'reactflow';
import { useContext, useEffect } from 'react';

import { CanvasContext } from '@studio/contexts';

import { useGetEdgeByCardOrNodeId } from './apiHooks';

export const useSetEdgeByCardOrNodeId = (id: string, type: 'card' | 'node') => {
  const { data: edgeData, isFetching } = useGetEdgeByCardOrNodeId({
    id,
    type,
  });

  const { setEdges } = useContext(CanvasContext);

  useEffect(() => {
    if (!edgeData || isFetching) return;

    const edge: Edge = {
      id: edgeData.id,
      type: 'smoothstep',
      source: edgeData.sourceNodeId,
      target: edgeData.targetNodeId,
      sourceHandle: edgeData.card?.id,
      data: edgeData.card?.id ?? edgeData.sourceNodeId,
    };

    setEdges(eds => addEdge(edge, eds));
  }, [edgeData, isFetching, setEdges]);
};
